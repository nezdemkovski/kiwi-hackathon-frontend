import React, { Component } from 'react';
import CityPreview from './CityPreview';

class CitiesPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentWillMount() {
    this.fetchKiwi();
  }

  fetchKiwi = () => {
    const { lat, lng } = this.props.city;

    fetch(
      `https://yojri0bch0.execute-api.eu-central-1.amazonaws.com/latest/flights?lat=${lat}&lng=${lng}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
        },
      },
    ).then(response => {
      return response.json();
    })
      .then(result => {
        this.setState({ data: result[0] && result[0].price !== 'undefined' && result[0].price });
      });
  };

  renderCityPreview = () => {
    const {
      data,
    } = this.state;

    console.log(data);

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
            <div className="text">Fly from Prague for {data ? data : '?'}</div>
          </div>

        </div>
        </div>
      )

  };

  render() {
    return this.renderCityPreview();
  }
}

export default CitiesPreview;
