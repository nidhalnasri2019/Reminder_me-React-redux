import React ,{Component} from 'react'
import  { connect} from 'react-redux'
import  { add_Reminder ,remove_Reminder,clear_Reminder} from '../actions'
import moment from 'moment'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class App extends Component {
      state = {
          text : '',
         date : new Date()  

      }
      render_Reminder=()=>{
           const {reminders}=this.props
           return(
               <ul className="list-group">
          {
               reminders.map(reminder=>{
                return (
                      <li key={reminder.id} className="list-group-item">
                            <div>{reminder.text}</div>
                            <div>{moment(new Date(reminder.date)).fromNow()}</div>
                            <button className=" closeIcon btn btn-danger" onClick={()=>this.props.remove_Reminder(reminder.id)}>x</button>
                      </li>  
                )

                  })
          }
               </ul>
           )
         
                
            
      }

    render(){
        console.log(this.props)
        return(
            <div className="App">
                 <img src="" alt=""/>
                 <div className="reminder-title">
                     <h3>What should you do</h3>
                 </div>
                 <input  onChange={(e)=>this.setState({text: e.target.value})}
                  value={this.state.text}
                  type="text" 
                  placeholder="Enter what you think" 
                  className="form-control"/>
                

<DatePicker
 className="form-control"
 value={this.state.date}
 placeholderText="Enter Date"
  selected={this.state.date}
  onChange={(date)=>{this.setState({date:date})}}
  showTimeSelect
  timeFormat ="HH:mm"
  dateFormat="MMMM d,yyyy h:mm aa"
  timeCaption ="time"
/>
                 <button onClick={
                     ()=>{this.props.add_Reminder(this.state.text, this.state.date)
                          this.setState({text:'' , date:''})
                        }
                    }
                 className="btn btn-primary btn-block">Add Reminder</button>
                 {this.render_Reminder()}
                 <button  onClick={()=>this.props.clear_Reminder()}
                  className=" clearReminder btn btn-danger btn-block"
                >
                    Clear Reminder</button>

            </div>
            
        )
        }         
}


//function mapDispatchToProps (dispatch) {
   // return {
   //     Add_Reminder :() => dispatch({type:'Add-Reminder'})
    //    Add_Reminder :() => dispatch(Add_Reminder())
    //}
//}

//function mapStateToPorps(state){
 //   return {
 //       reminders:state
 //   }
//}

 export default connect(state=>{
    return {
        reminders:state
    }
 } , {add_Reminder,remove_Reminder,clear_Reminder})(App);