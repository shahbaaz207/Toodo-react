import React ,{Component} from 'react';
export default class TodoInput extends Component{
  render(){
    const {title,handleDelete,handleEdit}=this.props;
    return(
    <li className="list-group-item text-capitalize d-flex
    justify-content-between my-2">
    <h5>{title}</h5>
    <div className="todo-icon">
    <span className="mx-2 text-success">
    <i className="fas fa-pen" onClick={handleEdit}/>
    </span>
    <span className="mx-2 text-danger" onClick={handleDelete}>
    <i className="fas fa-trash"/>
    </span>
    </div>

    </li>
    )
  }
}
