import classes from './button.module.scss';
import React from "react";

const Button = (props : { children: React.ReactNode, className?: string, onClick: () => void }) => {
  return (
    <button className={`${classes.button} ${props?.className}`} onClick={props.onClick}>{props.children}</button>
  );
}

export default Button;