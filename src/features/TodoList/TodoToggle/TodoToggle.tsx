import { ReactComponent as CheckCircle } from 'assets/check-circle.svg';
import { ReactComponent as Circle } from 'assets/circle.svg';
import { colorSuccess, iconSizeMd } from 'models/styleConstants';
import React, { HTMLAttributes } from 'react';
interface Props extends HTMLAttributes<HTMLElement> {
  isDone: boolean;
  toggleTodo: () => void;
}

const TodoToggle = ({ isDone, toggleTodo, className }: Props) => {
  return isDone ? (
    <CheckCircle
      className={className}
      width={iconSizeMd}
      fill={colorSuccess}
      onClick={toggleTodo}
    />
  ) : (
    <Circle className={className} width={iconSizeMd} fill={colorSuccess} onClick={toggleTodo} />
  );
};

export default TodoToggle;
