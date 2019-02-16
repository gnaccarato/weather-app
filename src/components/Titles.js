import React from 'react';

class Titles extends React.Component {
  render() {
    return (
        <div>
          <h1 className="title-container__title">Weather Tracker</h1>
          <p className="title-container__subtitle">Track weather around the world!</p>
        </div>
      );
  }
};

export default Titles;