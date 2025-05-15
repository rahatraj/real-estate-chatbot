export const initialData = {
    data : [],
    loading : false,
    error : ""
}

export const dataReducer = (state,action) => {
    switch(action.type){
        case 'SET_DATA':
            return {...state, data : action.payload}
        case "SET_ERROR":
            return {...state , error : action.payload}
        case "SET_LOADING":
            return {...state, loading : action.payload}
        default : {
            return state
        }
    }
}