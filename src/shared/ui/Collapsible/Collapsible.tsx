import React, { useState, useRef, useLayoutEffect } from 'react';
import { Icon } from 'shared/ui';
import ExpandIcon from 'shared/assets/icons/expand.svg';
import { classNames } from 'shared/lib/func';
import cls from './Collapsible.module.scss';

interface CollapsibleProps {
  head: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
}

export const Collapsible: React.FC<CollapsibleProps> = ({ head, children, defaultExpanded }) => {
  const [isCollapsed, setIsCollapsed] = useState(!defaultExpanded);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, []);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={classNames(cls.collapsible, [], { [cls.expanded]: !isCollapsed })}>
      <div className={cls.head} onClick={toggleCollapse}>
        <h2>{head}</h2>
        <Icon className={cls.icon} Svg={ExpandIcon} />
      </div>
      <div
        className={cls.content}
        style={{ maxHeight: isCollapsed ? 0 : contentHeight }}
        ref={contentRef}
      >
        <div className={cls.contentWrapper}>{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
