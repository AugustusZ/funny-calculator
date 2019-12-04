import React, { ReactNode } from 'react';

import './index.css';

const FooterButton = ({
  isDangerous,
  onClick,
  onDoubleClick,
  children
}: {
  isDangerous?: boolean;
  onClick: () => void;
  onDoubleClick?: () => void;
  children: ReactNode;
}) => {
  return (
    <button
      className={'footer-button' + (isDangerous ? ' dangerous' : '')}
      onClick={onClick}
      onDoubleClick={onDoubleClick}>
      {children}
    </button>
  );
};

export default FooterButton;
