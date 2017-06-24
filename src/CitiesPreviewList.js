import React, { Component } from 'react';
import CityPreview from './CityPreview';

class CitiesPreviewList extends Component {
  render() {
    console.log(this.props.data);
    const cities = Object.keys(this.props.data.cities).map(key => {
      return this.props.data.cities[key];
    });
    return (
      <div className="cities">
        {cities.map((city, id) => <CityPreview key={id} city={city} />)}
      </div>
    );
  }
}

export default CitiesPreviewList;
