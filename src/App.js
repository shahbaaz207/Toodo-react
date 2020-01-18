import React,{Component} from 'react';

import TodoInput from './component/index';
import TodoList from './component/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import uuid from 'uuid';


class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:"",
    editItem:false,
  };
  // method decleration
  handleChange=(event)=>{
    this.setState({
      item:event.target.value
    });
  };
  handleSubmit=(event)=>{
    event.preventDefault();

    const newItem={
      id:this.state.id,
      title:this.state.item,
    }
    // console.log(newItem)
const updatedItem=[...this.state.items,newItem];

this.setState({
  items:updatedItem,
  item:'',
  id:uuid(),
  editItem:false
})

  };

clearList=()=>{
    this.setState({
      items:[]
    })
  }
  handleDelete=(id)=>{
    const filteredItems=this.state.items.filter(item=>
      item.id!==id)
    this.setState({
      items:filteredItems
    });
  }
  handleEdit=(id)=>{
    const filteredItems=this.state.items.filter(item=>
      item.id!==id);
const selectedItem=this.state.items.find(item=>item.id===id)
console.log(selectedItem);
      this.setState({
        items:filteredItems,
        item:selectedItem.title,
        editItem:true,
        id:id
      });
  }
  render(){
    return (
      <div className="container">
      <div className="row">
      <div className="col-10 mx-auto col-md-8 mt-4">
      <h3 className="text-capitalize text-center">Todo input</h3>
      <TodoInput item={this.state.item}
       handleChange={this.handleChange}
       handleSubmit={this.handleSubmit}
      />
      <TodoList items={this.state.items}
      clearList={this.clearList}
      handleDelete={this.handleDelete}
        handleEdit={this.handleEdit}
        editItem={this.state.editItem}
      />
      </div>
      </div>
      </div>

    )
  }
}
export default App;
