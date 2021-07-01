import {ADD_PERSON} from '../constant'

export const addPerson = (personObj) =>{
    return ({type:ADD_PERSON, data:personObj})
}