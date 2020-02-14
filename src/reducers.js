import {WEATHER_INFO} from './constants'

const initialState={
    weatherData:{}
}


const reducer = (state = initialState,action)=>{
    switch(action.type){
        case WEATHER_INFO:
            const data = action.payload
            console.log(data)
            return{
                ...state,
                weatherData:data
            }
        default:
            return state
    }
}

export default reducer;