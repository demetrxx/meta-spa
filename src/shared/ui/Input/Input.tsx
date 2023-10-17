import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  InputHTMLAttributes,
  memo,
  Ref,
  TextareaHTMLAttributes,
} from 'react';
import { classNames } from 'shared/lib/func';
import cls from './Input.module.scss';

type TI = InputHTMLAttributes<HTMLInputElement> | TextareaHTMLAttributes<HTMLTextAreaElement>;

type HTMLInputProps = Omit<TI, 'value' | 'onChange'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  textarea?: boolean;
  type?: InputHTMLAttributes<HTMLInputElement>['type'];
}

const Input = forwardRef((props: InputProps, ref?: ForwardedRef<HTMLInputElement>) => {
  const { value, onChange, type = 'text', autofocus, className, textarea, ...otherProps } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let { value } = e.target;
    if (type === 'number') {
      // @ts-ignore
      value = Number(value);
    }
    onChange?.(value);
  };

  if (textarea) {
    return (
      // @ts-ignore
      <textarea
        autoFocus={autofocus}
        ref={ref as Ref<HTMLTextAreaElement>}
        {...otherProps}
        value={value ?? ''}
        rows={1}
        style={{ resize: 'none', height: 'auto', width: '100%' }}
        onChange={handleChange}
        className={classNames(cls.input, [className])}
      />
    );
  }

  return (
    // @ts-ignore
    <input
      autoFocus={autofocus}
      ref={ref as Ref<HTMLInputElement>}
      type={type}
      {...otherProps}
      value={value ?? ''}
      onChange={handleChange}
      className={classNames(cls.input, [className])}
    />
  );
});

const MemoizedInput = memo(Input);

export { MemoizedInput as Input };
