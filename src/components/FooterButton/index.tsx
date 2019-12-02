import React, { ReactNode } from 'react';

import './index.css';

const FooterButton = ({
  isDangerous,
  onClick,
  children
}: {
  isDangerous?: boolean;
  onClick: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className={'footer-button' + (isDangerous ? ' dangerous' : '')}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default FooterButton;
