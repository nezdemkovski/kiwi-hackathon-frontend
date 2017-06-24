import React, { Component } from 'react';
import CityPreview from './CityPreview';

class CitiesPreview extends Component {
  render() {
    console.log(this.props.city);
    return (
      <div className="city barcelona">
        <div className="map" />
        <div className="gradient-layer-map" />

        <div className="top">
          <div className="info">
            <div className="title">{this.props.city.city} </div>
            <div className="description">
              You can enjoy {this.props.city.places.length} places based on{' '}
              {this.props.activitiesCount} of
              your
              preferred activities in {' '}
              {this.props.city.city}.
            </div>
          </div>

          <div className="rating">
            <i className="fa fa-star yellow" aria-hidden="true" />
            <i className="fa fa-star yellow" aria-hidden="true" />
            <i className="fa fa-star yellow" aria-hidden="true" />
            <i className="fa fa-star yellow" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />

          </div>
        </div>

        <div className="center">
          <div className="button-transparent">
            <div className="bg" />
            <div className="text">
              Explore activities in {this.props.city.city}
            </div>
          </div>
        </div>
        <div className="bottom">

          <div className="main-text">
            <i className="fa fa-ticket" aria-hidden="true" /> You are one
            click away
            from trip to {this.props.city.city}
            . <a href="#">Buy tickets to {this.props.city.city}.</a>
          </div>
          <div className="button-transparent small">
            <div className="bg" />
            <div className="text">Fly from Prague for $345</div>
          </div>

        </div>

      </div>
    );
  }
}

export default CitiesPreview;
