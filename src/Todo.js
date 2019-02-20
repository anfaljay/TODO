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
          📌{this.props.item}  
          
          <button className="delete" type="delete" name="deleteTask"> 
            onClick ={()=> this.props.deleteTask(this.props.index)} 
              
              
              
          </button></li>
          {/* <img src ="https://banner2.kisspng.com/20180329/aie/kisspng-post-it-note-paper-sticker-sticky-notes-sticky-notes-5abcc91f0e5cc4.2234791915223216950588.jpg" /> */}
      
      </div>
  );}
}
  
export default Todo;
  
  

 