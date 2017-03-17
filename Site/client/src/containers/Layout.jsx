import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header.js'

class Layout extends Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Header />
        <div className="container mainContainer">
          <div className="row" id="mainRow">
          </div>
        </div>
        { /* Footer? */}
      </div>
    );
  }
}

/*
  map functions if needed, remove at end if not used
  const mapProps = state => ({})
  const mapDispatch = {}
*/

export default connect()(Layout);
