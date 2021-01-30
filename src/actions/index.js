import {ADD_REMINDER, REMOVE_REMINDER,CLEAR_REMINDER} from '../types'

export const add_Reminder= (text,date) => {
    const action = {
        type: ADD_REMINDER,
        text,
        date
    }
    console.log("add",action)
    return action
}
export const remove_Reminder =(id) =>{
    const action ={
        type: REMOVE_REMINDER,
        id
    }
    console.log("remove",action)
    return action
}
export const clear_Reminder =() =>{
    const action ={
        type:CLEAR_REMINDER
    }
    console.log("clear",action)
    return action
}