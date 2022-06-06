import { FC } from 'react';

interface Props {
  text: string;
  children?: React.ReactNode;
}

export const Button: FC<Props> = ({ text, children }) => (
  <button>
    {text}
    {children}
  </button>
);
