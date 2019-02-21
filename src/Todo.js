import React, {Component} from 'react';

class Todo extends Component {
  state={
    check: 'false',
    remove: 'false' 
    }
  checkTask=()=>{
    if(this.state.check === 'false'){
      this.setState({check: 'checked' })
    }else {
      this.setState({check:'false'})
    }
  }

  render() {
    return (
        <li onClick={this.checkTask} className= {this.state.check}>
          <span role="img" aria-label="emoji">📌  </span>{this.props.item}       
            <button className="button2" onClick={(e)=> this.props.deleteTask( e , this.props.del)}>Delete Task</button>
              {/* type="delete"*/}
              {/* name="deleteTask"*/}
        </li>
   )}
  }
  
export default Todo;
  
  

 