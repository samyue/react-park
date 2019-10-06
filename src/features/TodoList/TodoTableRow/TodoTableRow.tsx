import { ReactComponent as Circle } from 'assets/circle.svg';
import { ReactComponent as Trash } from 'assets/trash.svg';
import { colorDanger, colorSuccess, iconSizeMd } from 'models/styleConstants';
import React from 'react';
import './TodoTableRow.scss';
interface Props {
  description: string;
}

const TodoTableRow = ({ description }: Props) => {
  return (
    <tr className='todo-table-row'>
      <td className='todo-table-row__col todo-table-row__col--description'>{description}</td>
      <td className='todo-table-row__col todo-table-row__col--actions'>
        <Circle
          className='todo-table-row__action todo-table-row__action--circle'
          width={iconSizeMd}
          fill={colorSuccess}
        />
        <Trash
          className='todo-table-row__action todo-table-row__action--trash'
          height={iconSizeMd}
          fill={colorDanger}
        />
      </td>
    </tr>
  );
};

export default TodoTableRow;
