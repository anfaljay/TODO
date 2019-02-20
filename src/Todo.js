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
      <div>
        <li onClick={this.checkTask} className= {this.state.check}>
          <span role="img" aria-label="emoji">📌  </span>{this.props.item}       
            <button className="button2" onClick={()=> this.props.deleteTask(this.props.del)}>Delete Task</button>
              {/* type="delete"*/}
              {/* name="deleteTask"*/}
        </li>
      </div>
   )}
  }
  
export default Todo;
  
  

 