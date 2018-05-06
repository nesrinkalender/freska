import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Map from '../component/map.js';

import { fetchToilets } from '../modules/toilets';

class App extends Component {
  componentWillMount() {
    this.props.fetchToilets();
  }

  render() {
    return (
      <article>
        <header>
          <img src="static/freska-logo.svg" />
        </header>
        {this.props.toilets.length > 0 && <Map data={this.props.toilets} />}
        <footer>
          <span>Toilet queue sizes</span>
          <ul>
            <li className="shorter">Shorter</li>
            <li className="average">Average</li>
            <li className="longer">Longer</li>
          </ul>
        </footer>
      </article>
    );
  }
}

const mapStateToProps = state => ({
  toilets: state.toilets.list
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      fetchToilets
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
