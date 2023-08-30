import { useSelector } from 'react-redux';
import { StateSchema } from 'app/providers/store';

type Hook<T, Args extends any[]> = (...args: Args) => T;
type Selector<T, Args extends any[]> = (state: StateSchema, ...args: Args) => T;
type Result<T, Args extends any[]> = [Hook<T, Args>, Selector<T, Args>];

// if sectors length > 1 => reselect
export function buildSelector<T, Args extends any[]>(selector: Selector<T, Args>): Result<T, Args> {
  const useSelectorHook: Hook<T, Args> = (...args: Args) =>
    useSelector((state: StateSchema) => selector(state, ...args));

  return [useSelectorHook, selector];
}
