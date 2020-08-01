import React from 'react'

import logo2 from '../../assets/images/Logo2.svg';

declare interface ILogoProps {
  src?: string;
  width?: string;
}

const Logo: React.FC<ILogoProps> = (props) => {
  return (
    <React.Fragment>
      <img
        src={props.src ? props.src : logo2}
        width={props.width ? props.width : '200px'}
        alt="copo burger logo"
      />
    </React.Fragment>
  )
}

export default Logo;
