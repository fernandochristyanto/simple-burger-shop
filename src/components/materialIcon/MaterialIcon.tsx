import React from 'react'

declare interface IMaterialIconProps {
  children?: React.ReactNode
  fontSize?: string,
  iconName?: string,
  className?: string[],
}

const MaterialIcon = (props: IMaterialIconProps) => {
  const fontSize = props.fontSize ?? '1rem';
  const iconName = props.iconName ?? props.children ?? 'code';
  const classNames = props.className ? props.className : [];

  return (
    <span style={{ fontSize }} className={classNames.join(' ') + ' material-icons-outlined'}>
      {iconName}
    </span>
  )
}

export default MaterialIcon;
