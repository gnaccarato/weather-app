import React from 'react';

class Form extends React.Component {
  render() {
    return (
        <form onSubmit={this.props.getWeather} class="form-group">
          <input class="form-control input-sm" type="text" name="city" placeholder="Enter City..."/>
          <input class="form-control input-sm" type="text" name="country" placeholder="Enter Country..."/>
          <button class="btn btn-info btn-block">Get Weather</button>
        </form>
      );
  }
};

export default Form; 