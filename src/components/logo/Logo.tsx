import React from 'react'

import logo1 from '../../assets/images/Logo1.svg';

declare interface ILogoProps {
  src?: string;
  width?: string;
}

const Logo = (props: ILogoProps) => {
  return (
    <React.Fragment>
      <img
        src={props.src ? props.src : logo1}
        width={props.width ? props.width : '200px'}
        alt="copo burger logo"
      />
    </React.Fragment>
  )
}

export default Logo;
