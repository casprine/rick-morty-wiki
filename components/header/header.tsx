import { FunctionComponent } from 'react';

interface HeaderProps {
  title: string;
}

export const Header: FunctionComponent<HeaderProps> = ({ title }) => {
  return <h1 className="page-header"> {title}</h1>;
};
