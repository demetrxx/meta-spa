import firstCharLowerCase from '../../helpers/firstCharLowerCase.js';

const interfaceConst = 'interface';

export default (componentName) => `import { memo } from 'react';
import { classNames } from 'shared/lib/func';
import cls from './${componentName}.module.scss';

${interfaceConst} ${componentName}Props {
  className?: string;
}

export const ${componentName} = memo((props: ${componentName}Props) => {
  const { className } = props;
    
  return (
    <div className={classNames(cls.${firstCharLowerCase(componentName)}, [className])}>
    
    </div>
  );
});`;
