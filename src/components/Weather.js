import React from 'react';

class Weather extends React.Component {
  render() {
    return (
        <div class="weather_values">
          {/*Values will be displayed if they exist*/}          
          {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
          {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
          {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
          {this.props.description && <p>Weather: {this.props.description}</p>}
          {this.props.error && <h6>{this.props.error}</h6>}
        </div>
      );
  }
};

export default Weather;
