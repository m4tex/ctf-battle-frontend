import React from "react";
import classes from './Clickable.module.scss';

function Clickable(props: { children: React.ReactNode, className?: string, onClick: () => void }) {
  let classNames = 'interactive ' + classes.clickable + ' ' + props.className;

  return (
    <p {...props} className={classNames} />
  );
}

export default Clickable;