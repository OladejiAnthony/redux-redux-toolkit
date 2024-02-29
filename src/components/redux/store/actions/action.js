import { ACTIONS } from "./actionTypes"

 export const handleSubtract = () => {
    return{
      //type: "SUBTRACT",
      type: ACTIONS.SUBTRACT
    }
  }

 export const handleReset = () => {
    return{
      //type: "RESET",
      type: ACTIONS.RESET
    }
  }

 export const handleAdd = () => {
    return{
      //type: "ADD",
      type: ACTIONS.ADD
    }
  }
 export const handleAddNumber = (amount) => {
    return{
      //type: "ADD_NUMBER",
      type: ACTIONS.ADD_NUMBER,
      payload: amount
    }
  }
 export const toggleAuth = () => {
    return{
      //type: "TOGGLE_AUTH"
      type: ACTIONS.TOGGLE_AUTH
    }
  }

  