// React 
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

// Redux
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/actions/products.actions'

// SCSS
import './home-component.scss'

class HomeComponent extends Component {
    constructor(props) {
        super(props)
    }

    componentWillReceiveProps(newProps) {
        console.log('Home change Props', newProps.location.search)
        if (this.props.location.search !== newProps.location.search) {
            this.props.fetchProducts(`${newProps.location.search}`)
        }
    }

    componentDidMount() {
        console.log(this.props);
        this.props.fetchProducts(`${this.props.location.search}`)
    }

    render() {
        const items = !this.props.loading ? this.props.items.map(item => (
            <div className="media" key={item.id}>
                <span className="thumbnail">
                    <img src={item.thumbnail} alt="Generic placeholder image" />
                </span>
                <div className="media-body">
                    <h5 className="price">${item.price}</h5>
                    <NavLink to={`/item/${item.id}`} className="title">{item.title}</NavLink>
                </div>
                <span className="place col-md-2">{item.address.state_name}</span>
            </div>
        )) : (
            <div>
                <div className="media-loading row">
                    <div className="thumbnail col-md-2">
                    </div>
                    <div className="media-body col-md-8">
                        <h5 className="price"></h5>
                        <h5 className="price"></h5>
                        <h5 className="price"></h5>
                    </div>
                    <div className="place col-md-2 col-md-2"></div>
                </div>
                <div className="media-loading row">
                    <div className="thumbnail col-md-2">
                    </div>
                    <div className="media-body col-md-8">
                        <h5 className="price"></h5>
                        <h5 className="price"></h5>
                        <h5 className="price"></h5>
                    </div>
                    <div className="place col-md-2 col-md-2"></div>
                </div>
                <div className="media-loading row">
                    <div className="thumbnail col-md-2">
                    </div>
                    <div className="media-body col-md-8">
                        <h5 className="price"></h5>
                        <h5 className="price"></h5>
                        <h5 className="price"></h5>
                    </div>
                    <div className="place col-md-2 col-md-2"></div>
                </div>
            </div>
            )

        const error = this.props.error != '' ? (
            <div className="d-flex justify-content-center">
                <span className="text-danger">
                    {this.props.error}
                </span>
            </div>
        ) : (
                <span></span>
            )

        return (
            <div>
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

export default connect(mapStateToProps, { fetchProducts })(HomeComponent)
