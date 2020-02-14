import {takeEvery,put} from 'redux-saga/effects'


export default function* saga(){
    yield takeEvery('GET_WEATHER_INFO',watcherFunction)
}


function* watcherFunction(data){
    console.log(data)
    // const payload = data.value;
const url = `http://api.openweathermap.org/data/2.5/weather?q=${data.value}&appid=df2f71948d37bc9dfb0bb0dabb83b16e`
const UrlData = yield fetch(url,{method:'GET',})
                        .then(resp =>{
                                return resp.json()  
                        })
                        
    console.log(UrlData)
    if(UrlData.cod === '404'){
        console.log('fail')
        console.log(UrlData.message)
        const payload ={
            status:false,
            message:UrlData.message,
        }
        yield put ({type:'WEATHER_INFO',payload})
    }else{
        console.log('pass')
        const payload={
            status:true,
            city:UrlData.name,
            temperature:parseInt((UrlData.main.temp)-273),
            sky:UrlData.weather[0].main,
            Description:UrlData.weather[0].description,
    
        }
        yield put ({type:'WEATHER_INFO',payload})
    }
    
}