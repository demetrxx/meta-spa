declare const __PROJECT__: 'frontend' | 'storybook' | 'jest';
declare const __IS_DEV__: boolean;
declare const __API_URL__: string;

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

interface IdObject {
  id: number;
}

type CreateData<T extends IdObject> = Omit<T, 'id'>;
type UpdateData<T extends IdObject> = Partial<T> & Pick<T, 'id'>;
type Id = number;

type ValueOf<T> = T[keyof T];

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

type OptionalRecord<R extends keyof any, T> = {
  [P in R]?: T;
};
