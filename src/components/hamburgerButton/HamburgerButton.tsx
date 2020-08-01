import React from 'react'

import classes from './HamburgerButton.module.css';

declare interface IHamburgerProps {
  isOpen?: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<IHamburgerProps> = (props) => {
  const classNames = [classes.HamburgerButton, (props.isOpen ? classes.Open : '')];
  return (
    <div className={classNames.join(' ')} onClick={() => props.onClick()}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

export default HamburgerButton;
