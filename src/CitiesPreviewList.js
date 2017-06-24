import React, { Component } from 'react';
import CityPreview from './CityPreview';

class CitiesPreviewList extends Component {
  render() {
    return (
      <div className="cities">
        <div className="city barcelona">
          <div className="map" />
          <div className="gradient-layer-map" />

          <div className="top">
            <div className="info">
              <div className="title">Barcelona, Spain</div>
              <div className="description">
                You can enjoy 3 from 5 of your preferred activities in
                Barcelona.
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
              <div className="text">Explore activities in Barcelona</div>
            </div>
          </div>
          <div className="bottom">

            <div className="main-text">
              <i className="fa fa-ticket" aria-hidden="true" /> You are one
              click away
              from trip to Barcelona. <a href="#">Buy tickets to Barcelona.</a>
            </div>
            <div className="button-transparent small">
              <div className="bg" />
              <div className="text">Fly from Prague for $345</div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default CitiesPreviewList;
