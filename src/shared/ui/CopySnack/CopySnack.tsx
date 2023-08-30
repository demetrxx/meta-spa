import { memo, useCallback, useState } from 'react';
import { classNames } from 'shared/lib/func';
import { createPortal } from 'react-dom';
import { Text } from 'shared/ui';
import cls from './CopySnack.module.scss';

interface CopySnackProps {
  className?: string;
  show?: boolean;
}

export const useCopy = (text?: string) => {
  const [showCopySnack, setShowCopySnack] = useState(false);

  const copy = useCallback(async () => {
    await navigator.clipboard.writeText(text || '');
    setShowCopySnack(true);

    setTimeout(() => setShowCopySnack(false), 3000);
  }, [text]);

  return { copy, showCopySnack };
};

export const CopySnack = memo((props: CopySnackProps) => {
  const { className, show } = props;

  if (!show) return null;

  return createPortal(
    <Text type="subtitle-3" className={classNames(cls.copySnack, [className])}>
      Copied to clipboard!
    </Text>,
    document.body
  );
});
