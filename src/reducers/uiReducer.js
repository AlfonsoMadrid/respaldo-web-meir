import { types } from "../types/types"


const initialState = {
    loading: false,
    msgError: null,
    modalActive: false
}
 
export const uiReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.uiSetError:
            return {
                ...state,
                msgError: action.payload
            }
        
        case types.uiUnsetError:
            return {
                ...state,
                msgError: null
            }
    
        case types.uiStartLoading:
            return {
                ...state,
                loading: true
            }
    
        case types.uiFinishLoading:
            return {
                ...state,
                loading: false
            }

        case types.uiOpenModal:
            return {
                ...state,
                modalActive: true
            }
            
        case types.uiCloseModal:
            return {
                ...state,
                modalActive: false
            }
            
        default:
            return state;
    }
}