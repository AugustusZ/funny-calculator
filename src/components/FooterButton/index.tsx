import React from 'react';

import './index.css';

const FooterButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button className="footer-button" onClick={onClick}>
      =
    </button>
  );
};

export default FooterButton;
