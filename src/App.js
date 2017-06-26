import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Search from './Search';
import Sidebar from './Sidebar';
import CitiesPreviewList from './CitiesPreviewList';
import './static/css/index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      places: [],
      chosenTiles: [],
      chosenTags: [],
      data: null,
    };
    this.tiles = [
      {
        name: 'Good food',
        tagQuery: 'restaurant',
        nameC: 'food',
      },
      {
        name: 'Bars / pubs',
        tagQuery: 'Hotel',
        nameC: 'bar',
      },
      {
        name: 'Diving',
        tagQuery: 'diving',
        nameC: 'diving',
      },
      {
        name: 'Sightseeings',
        tagQuery: 'historical',
        nameC: 'sightseeings',
      },
      {
        name: 'Surfing',
        tagQuery: 'surfing',
        nameC: 'surfing',
      },
      {
        name: 'Skateboarding',
        tagQuery: 'skateboard%7Cskatepark',
        nameC: 'skateboarding',
      },
      {
        name: 'Beach',
        tagQuery: 'beach',
        nameC: 'beach',
      },
      {
        name: 'Spa / massages',
        tagQuery: 'spa',
        nameC: 'massages',
      },
      {
        name: 'Hiking',
        tagQuery: 'hiking',
        nameC: 'hiking',
      },
      {
        name: 'Horse riding',
        tagQuery: 'Horse%20Riding',
        nameC: 'horse-riding',
      },
      {
        name: 'Sailing',
        tagQuery: 'sailing',
        nameC: 'sailing',
      },
      {
        name: 'Kayaking',
        tagQuery: 'kayaking',
        nameC: 'kayaking',
      },
      {
        name: 'Dolphin swimming',
        tagQuery: 'dolphin',
        nameC: 'dolphin',
      },
    ];
  }
  getData = () => {
    const query = this.state.chosenTags.join('%7C');
    fetch(
      `https://yojri0bch0.execute-api.eu-central-1.amazonaws.com/latest/places?tags=${query}`,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'x-api-key': 'nSCQiwW9R88zlr0P7J2VocUXBnKejmO26m9eIUl8',
        },
      },
    )
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log('response:', result);
        this.setState({ data: result });
      });
  };
  addTag = tag => {
    this.setState({ chosenTags: [...this.state.chosenTags, tag] }, () => {
      this.getData();
    });
  };
  removeTag = tag => {
    this.setState(
      {
        chosenTags: this.state.chosenTags.filter(item => item !== tag),
      },
      () => {
        console.log('chosen tags: ', this.state.chosenTags);
        if (this.state.chosenTags.length === 0) {
          this.setState({ data: [] });
        } else {
          this.getData();
        }
      },
    );
  };
  toggleTile = tile => {
    if (!this.state.chosenTiles.some(item => item.name === tile.name)) {
      this.setState({ chosenTiles: [...this.state.chosenTiles, tile] });
      this.addTag(tile.tagQuery);
    } else {
      this.removeTile(tile);
    }
  };
  removeTile = tile => {
    this.setState({
      chosenTiles: this.state.chosenTiles.filter(
        item => item.name !== tile.name,
      ),
    });
    this.removeTag(tile.tagQuery);
  };
  handleSearch = e => {
    e.preventDefault();
    this.setState({ query: e.target.value });
  };

  render() {
    const re = RegExp(this.state.query, 'i');

    const noCitiesToShow =
      !this.state.chosenTags.length ||
      !this.state.data ||
      (this.state.data && !this.state.data.total);
    const tilesToShow = this.state.query
      ? this.tiles.filter(tile => tile.name.match(re))
      : this.tiles;
    return (
      <div className="App">
        <div className="container">

          <Sidebar
            total={this.state.data ? this.state.data.total : '0'}
            chosenTiles={this.state.chosenTiles}
            noCitiesToShow={noCitiesToShow}
            removeTile={this.removeTile}
          />

          <div className="column--right">

            <Route
              exact
              path="/"
              render={() => {
                return <div className="placeholder" />;
              }}
            />

            <Route
              exact
              path="/"
              render={() =>
                <div>
                  <Search applySearch={this.handleSearch} />
                  <div className="list">
                    {tilesToShow.map(tile => {
                      const isSelected = this.state.chosenTiles.some(
                        item => item.name === tile.name,
                      )
                        ? 'selected'
                        : '';
                      return (
                        <div
                          className={`tile ${tile.nameC} ${isSelected}`}
                          key={tile.name + tile.tagQuery}
                          onClick={() => {
                            this.toggleTile(tile);
                          }}
                        >
                          <div className="gradient-layer" />
                          <div className="icon" />
                          <div className="name">{tile.name}</div>

                        </div>
                      );
                    })}
                  </div>
                </div>}
            />
            {/*<Search applySearch={this.handleSearch} />*/}
            <Route
              path="/cities-list"
              render={() =>
                <CitiesPreviewList
                  activitiesCount={this.state.chosenTiles.length}
                  data={this.state.data}
                />}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
