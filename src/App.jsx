import React, { Component } from "react";
import "./App.scss";

// Redux
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {cleanPathFromRoot} from './store/actions/products.actions'

class App extends Component {
  componentWillMount(){
    this.props.cleanPathFromRoot()
  }
  render() {
    return (
      <div id="logo" className="d-flex justify-content-center">
        <img src="/assets/img/logo.png" alt="Mercado libre App"/>
      </div>
    );
  }
}

App.propTypes = {
  cleanPathFromRoot: PropTypes.func.isRequired  
}

const mapStateToProps = state => ({
  ...state
})

export default connect(mapStateToProps,{cleanPathFromRoot})(App);
