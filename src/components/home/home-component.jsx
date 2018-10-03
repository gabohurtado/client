// React 
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux'
import {fetchProducts} from '../../store/actions/products.actions'

// Component
import NavbarComponent from '../navbar/navbar.component'

class HomeComponent extends Component {
    constructor(props){
        super(props)

        // console.log(this.props);
        // console.log('Home', this.props.location.search);
        
        
    }

    componentWillReceiveProps(newProps){
        console.log('Home change Props', newProps.location.search)
        if (this.props.location.search !== newProps.location.search) {
            this.props.fetchProducts(`${newProps.location.search}`)
          }
    }

    componentDidMount(){
        console.log(this.props);
        this.props.fetchProducts(`${this.props.location.search}`)
    }

    render(){
        const items = !this.props.loading?this.props.items.map(item => (
            <li key={item.id}><NavLink to={`/item/${item.id}`}>{item.title}</NavLink></li>
        )):(
            <span>loading...</span>
        )

        const error = this.props.error?(
            <span>Error : this.props.error</span>
        ):(
            <span></span>
        )

        return (
            <div>
                <h1 className="text-white">Home</h1>
                <ul>
                    {items}
                </ul>
                <h5>{error}</h5>
                {this.props.children}
            </div>
        )
    }
}

HomeComponent.propTypes = {
    items: PropTypes.array.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    fetchProducts: PropTypes.func
  }
const mapStateToProps = state => ({
    items: state.product.items,
    error: state.product.error,
    loading: state.general.loading
})

export default connect(mapStateToProps, {fetchProducts})(HomeComponent)
