import classes from './Button.module.scss';
import React from "react";

const Button = (props : { children: React.ReactNode, className?: string, onClick: () => void}) => {
  let classNames = 'interactive ' + classes.button + ' ' + props.className;

  return (
    <button {...props} className={classNames} />
  );
}

export default Button;