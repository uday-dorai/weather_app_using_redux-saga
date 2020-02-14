export const getWeatherForecast = (value) =>{
    console.log(value)
    return{
        type:'GET_WEATHER_INFO',
        value,
    }
}