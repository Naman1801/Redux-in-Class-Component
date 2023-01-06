
const initialState = {  
    count:0   
}
const Operation = (state=initialState,action)=>{
    // console.log("state",state.count);
    console.log("payload",action);
    switch(action.type){
        case 'INCREMENT':
            return {
                ...state,
                count:state.count+1
            }
        case 'DECREMENT':
            return {
                ...state,
                count:state.count-1
            }
            
        default:
            return state
    }
}
export default Operation