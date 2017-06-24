import React, { Component } from 'react';
import CitiesCount from './CitiesCount';
import { Link, Route } from 'react-router-dom';

class Sidebar extends Component {
  render() {
    return (
      <div className="column--left">
        <Link to="/">
          <div className="logo" />
        </Link>
        <Route
          exact
          path="/"
          render={() => {
            return <div />;
          }}
        />
        <Route
          path="/cities-list"
          render={() => {
            return <div />;
          }}
        />
        <div className="title">Where do you wanna go?</div>
        <div className="location">
          <div className="place">
            <i className="fa fa-globe" aria-hidden="true" /> Literally
            anywhere.
          </div>
          <div className="button--link">choose some</div>
        </div>

          {this.props.chosenTiles.length !== 0
              ? <div className="title">What will you enjoy on your trip?</div>
              : null}


        {this.props.chosenTiles.map(tile =>
          <div
            className={`interest ${tile.nameC}`}
            key={tile.tagQuery + tile.name}
          >
            <div className="name">
              <div className="interest-icon" />
              {tile.name}
            </div>
            <div className="icon" onClick={() => this.props.removeTile(tile)}>
              <i className="fa fa-times" aria-hidden="true" />
            </div>
          </div>,
        )}

        <div className="button--huge">

            {this.props.chosenTiles.length === 0
                ? <div>In the world is approx.</div>
                : <div>In the world is exactly</div>}
          <div className="count">
            <CitiesCount
              count={
                this.props.noCitiesToShow
                  ? this.props.chosenTiles.length ? '0' : '1,634,573'
                  : `${this.props.total}`
              }
            />
          </div>
              {this.props.chosenTiles.length === 0
                  ? <div>that can match your needs. Uff.<br/><br/>We'll choose the best ones for you.</div>
                  : <div>that match your needs.</div>}

            {this.props.chosenTiles.length === 0
                ? <div className="empty-state">
                <br/><br/>Tell us what you want to enjoy {'     '}<i className="fa fa-arrow-right" aria-hidden="true" />
            </div>
                : <Link to="/cities-list">
                <div className="button-transparent">
                    <div className="bg" />
                    <div className="text">Show these places <i className="fa fa-chevron-right" aria-hidden="true"></i>
                    </div>
                </div>
            </Link>}

        </div>
      </div>
    );
  }
}

export default Sidebar;
