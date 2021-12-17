import React from 'react'

import { ButtonBack, ButtonFront } from './index'

const Button = (props) => (
  <ButtonBack alt={props.alt} form={props.form} disabled={props.disabled}>{props.children}
    <ButtonFront alt={props.alt} onClick={props.onClick} disabled={props.disabled} href={props.href} target="_blank">{props.children}</ButtonFront>
  </ButtonBack>
);

export default Button
