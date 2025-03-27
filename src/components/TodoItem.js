import './css/TodoItem.css'
import { DeleteIcon } from '../components/DeleteIcon'
import { CompleteIcon } from '../components/CompleteIcon'

function TodoItem(props) {
  return ( 
    <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}  
      />
      {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.OnComplete}>V</span> */}
      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
      {/* <span className="Icon Icon-delete" onClick={props.OnDelete}>X</span> */}
      <DeleteIcon/>
    </li>
  );
}

export { TodoItem }
