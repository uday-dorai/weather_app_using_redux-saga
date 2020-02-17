import React, { Component } from 'react'
import { getWeatherForecast } from './action'
import { connect } from 'react-redux'



class weatherComponent extends Component {

    onSubmitHandler = (e) => {
        e.preventDefault();
        const value = e.target[0].value;
        console.log(value)
        this.props.getWeatherForecast(value)
        e.target[0].value = ''
    }

    currentDateAndTime = () => {
        let DateAndTime = new Date();
        let date = '\t'+DateAndTime.getHours() + ':' + DateAndTime.getMinutes() + ':' + DateAndTime.getSeconds() + ' '+ DateAndTime.getDate() + '-' + (DateAndTime.getMonth() + 1) + '-' + DateAndTime.getFullYear() ;
        // const currDate = "Current Date= " + date;/
        return (
            <p>{date}</p>
        );
    }

    renderData = () => {
        if (this.props.weatherInfo.weatherData !== undefined) {
            console.log(this.props.weatherInfo.weatherData.city)

            if (this.props.weatherInfo.weatherData.status) {
                return (
                    <div className='weatherDetail'>
                        <div className='topInfo'>

                            <img src={`http://openweathermap.org/img/wn/${this.props.weatherInfo.weatherData.icon}@2x.png`} />
                            <div className='topTemperature'>{this.props.weatherInfo.weatherData.temperature} °C
                            </div>
                            <div className='label'> {this.props.weatherInfo.weatherData.city},{this.props.weatherInfo.weatherData.country} </div>
                            <div>{this.currentDateAndTime()}</div>
                        </div>



                        
                        <div className='singleItem'>
                            <div className='info_name'>City :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.city},{this.props.weatherInfo.weatherData.country}</div>
                        </div>

                        <div className='singleItem'>
                            <div className='info_name'>Temperature :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.temperature} °C
                            </div>
                        </div>

                        <div className='singleItem'>
                            <div className='info_name'>sky :</div>
                            <div className='info_detail'>
                                <img className='imageSize' src={`http://openweathermap.org/img/wn/${this.props.weatherInfo.weatherData.icon}@2x.png`} />
                            </div>
                        </div>

                        <div className='singleItem'>
                            <div className='info_name'>Description :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.Description}</div>

                        </div>

                        <div className='singleItem'>
                            <div className='info_name'>Wind :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.windSpeed} m/s</div>

                        </div>
                        <div className='singleItem'>
                            <div className='info_name'>Humidity :</div>
                            <div className='info_detail'>{this.props.weatherInfo.weatherData.Humidity} %</div>

                        </div>

                    </div>
                );
            } else {
                return (
                    <div>
                        <div className='incorrectCity'>{this.props.weatherInfo.weatherData.message}</div>
                    </div>
                );
            }


        }
    }


    render() {

        return (
            <div className='completePageInfo'>
                <h1>Weather Forecast</h1>
                <form onSubmit={this.onSubmitHandler}>
                    <input placeholder="Enter place name" className='inputForm'></input>
                    <button type='submit' className='submitBtn'>submit</button>
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

const mapStateToProps = state => {
    console.log(state);
    return { weatherInfo: state }
}

const mapDispatchToProps = {
    getWeatherForecast
}

export default connect(mapStateToProps, mapDispatchToProps)(weatherComponent);
