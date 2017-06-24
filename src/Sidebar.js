import React, { Component } from 'react';
import CitiesCount from './CitiesCount';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="column--left">
        <Link to="/">
          <div className="logo" />
        </Link>
        <div className="title">Where do you wanna go?</div>
        <div className="location">
          <div className="place">
            <i className="fa fa-globe" aria-hidden="true" /> Literally
            anywhere.
          </div>
          <div className="button--link">choose some</div>
        </div>

        <div className="title">What will you enjoy on your trip?</div>

        {this.props.chosenTiles.map(tile =>
          <div
            className={`interest ${tile.nameC}`}
            key={tile.tagQuery + tile.name}
          >
            <div className="name">
              <div className="interest-icon" />
              {tile.name}
            </div>
            <div className="icon" onClick={() => this.removeTile(tile)}>
              <i className="fa fa-times" aria-hidden="true" />
            </div>
          </div>,
        )}

        {this.props.chosenTiles.length === 0
          ? <div className="empty-state">
              Select some activities.{' '}
              <i className="fa fa-arrow-right" aria-hidden="true" />{' '}
              <i className="fa fa-arrow-right" aria-hidden="true" />{' '}
              <i className="fa fa-arrow-right" aria-hidden="true" />
              <br /><br />Or you can stay home and enjoy photos from your
              last trip. :-)
            </div>
          : null}
        <Link to="/cities-list">
          <a href="#">
            <i className="fa fa-chevron-left" aria-hidden="true" />
            {' '}
            Show cities
          </a>
        </Link>
        <div className="button--huge">
          <div className="count">
            <CitiesCount
              count={
                this.props.noCitiesToShow
                  ? this.props.chosenTiles.length ? '0' : '1,634,573'
                  : `${this.props.total}`
              }
            />
          </div>
          <div className="">
            places that match your needs
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
