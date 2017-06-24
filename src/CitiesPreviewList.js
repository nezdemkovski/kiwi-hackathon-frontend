import React, { Component } from 'react';
import CityPreview from './CityPreview';

class CitiesPreviewList extends Component {
  render() {
    console.log(this.props.data);
    const cities = Object.keys(this.props.data.cities).map(key => {
      return { city: key, ...this.props.data.cities[key] };
    });
    const sortedCities = cities.sort((a, b) => {
      return b.places.length - a.places.length;
    });
    return (
      <div className="cities">
        {cities.map((city, index) =>
          <CityPreview
            activitiesCount={this.props.activitiesCount}
            key={`${city.id}-${index}`}
            city={city}
          />,
        )}
      </div>
    );
  }
}

export default CitiesPreviewList;
