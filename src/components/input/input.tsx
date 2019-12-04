import React, { FC } from 'react';
import './input.css';

interface Props {
  placeholder: string;
  name: string;
  onChange: any;
  required: boolean;
  style?: object;
}

const Input: FC<Props> = ({ style, onChange, placeholder, name, required }) => (
  <input style={{ ...style }} required={required} onChange={onChange} placeholder={placeholder} name={name} className="input" />
);

export default Input;
