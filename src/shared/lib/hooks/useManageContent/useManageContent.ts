import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';

export const useManageContent = <T>({
  deleteFn,
  queryFn,
  editPathGetter,
  createPathGetter,
  queryFnArgs = [],
}: {
  queryFn: (...args: any) => any;
  deleteFn: () => any;
  editPathGetter: (id: string) => string;
  createPathGetter: () => string;
  queryFnArgs?: any[];
}) => {
  const navigate = useNavigate();

  const { data, isLoading } = queryFn(...queryFnArgs) as { isLoading: boolean; data: T[] | null };
  const [deleteTrigger] = deleteFn();

  const onDelete = useCallback(
    (id: number) => {
      if (!window.confirm('Are you sure?')) return;

      deleteTrigger(id);
    },
    [deleteTrigger]
  );

  const onEdit = useCallback(
    (id: number) => {
      navigate(editPathGetter(String(id)));
    },
    [editPathGetter, navigate]
  );
  const onAdd = useCallback(() => {
    navigate(createPathGetter());
  }, [createPathGetter, navigate]);

  return { data, isLoading, onDelete, onEdit, onAdd };
};
