

const initialCounter = {
    count: 1,
    name: 'Adil'
  }

export const INCREASE_COUNT = 'INCREASE_COUNT'
export const DECREASE_COUNT = 'DECREASE_COUNT'
export const SUM_COUNT = 'SUM_COUNT'


export  const counterReducer = (state=initialCounter , action) => {
    if (action.type === INCREASE_COUNT ) {
      // return {count: state.count + 1}
      return {...state, count: state.count+1}
    }
  
    if (action.type === DECREASE_COUNT) {
      // return {count: state.count + 1}
      return {...state, count: state.count-1}
    }
  
    if (action.type === SUM_COUNT) {
      // return {count: state.count + 1}
      return {...state, count: state.count + state.count}
    }
  
    return state
  }

  export const increaseCounter = () => ({type: INCREASE_COUNT})
  export const decreaseCounter = () => ({type: DECREASE_COUNT})
  export const sumCounter = () => ({type: SUM_COUNT})