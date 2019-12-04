import React, { FC } from 'react';
import './actionButton.css';

interface Props {
  action: string;
  onClick: React.MouseEventHandler;
  containerStyle?: object;
}

const ActionButton: FC<Props> = ({ containerStyle, onClick, action }) => (
  <div onClick={onClick} style={{ ...containerStyle }} className="actionButton">
    {action}
  </div>
);

export default ActionButton;
