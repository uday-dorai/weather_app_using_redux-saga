import React, { Component } from 'react'
import { getWeatherForecast } from './action'
import {connect} from 'react-redux'



class weatherComponent extends Component{

    onSubmitHandler = (e) => {
        e.preventDefault();
        const value = e.target[0].value;
        console.log(value)
        this.props.getWeatherForecast(value)
        e.target[0].value = ''
      }

    renderData = () =>{
        if(this.props.weatherInfo.weatherData !== undefined){
            console.log(this.props.weatherInfo.weatherData.city)

            if(this.props.weatherInfo.weatherData.status){
                return (
                    <div className='weatherDetail'>
                        <div className='singleItem'>
                            <div className='info_name'>City :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.city}</div>
                        </div>
        
                        <div className='singleItem'>
                            <div className='info_name'>Temperature :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.temperature}degrees
                            </div>
                        </div>
        
                        <div className='singleItem'>
                            <div className='info_name'>sky :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.sky}</div>
                        
                        </div>
        
                        <div className='singleItem'>
                            <div className='info_name'>Description :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.Description}</div>
                        
                        </div>
                    
                    </div> 
                    );
            }else{
                return (
                    <div>
                        <div className='weatherDetail'>{this.props.weatherInfo.weatherData.message}</div>
                    </div>
                );
            }

            
        }
    }
    

    render(){
        
        return (
            <div>
                <h1>Weather Forecast</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <input placeholder="Enter place name" ></input>
                    <button type='submit'>submit</button>
                </form>
                <div>
                    <div>
                        {this.renderData()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    console.log(state);
    return {weatherInfo:state}
}

const mapDispatchToProps = {
    getWeatherForecast
  }

export default connect(mapStateToProps, mapDispatchToProps)(weatherComponent);
