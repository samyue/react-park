import { ReactComponent as Circle } from 'assets/circle.svg';
import { colorSuccess, iconSizeMd } from 'models/styleConstants';
import React from 'react';
import { Button } from 'reactstrap';
import './TodoTableRow.scss';
interface Props {
  description: string;
}

const TodoTableRow = ({ description }: Props) => {
  return (
    <tr className='todo-table-row'>
      <td className='todo-table-row__col todo-table-row__col--description'>{description}</td>
      <td className='todo-table-row__col todo-table-row__col--actions'>
        <Circle className='todo-table-row__circle' width={iconSizeMd} fill={colorSuccess} />
        <Button color='danger' size='sm' className='todo-table-row__button'>
          Remove
        </Button>
      </td>
    </tr>
  );
};

export default TodoTableRow;
