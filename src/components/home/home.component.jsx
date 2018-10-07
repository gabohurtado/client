// React 
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Component
import ElementList from '../generals/element-list.component'

// Redux
import { connect } from 'react-redux'
import { fetchProducts } from '../../store/actions/products.actions'

// SCSS
import './home.component.scss'

class HomeComponent extends Component {
    componentWillReceiveProps(newProps) {
        if (this.props.location.search !== newProps.location.search) {
            this.props.fetchProducts(`${newProps.location.search}`)
        }
    }

    componentDidMount() {
        this.props.fetchProducts(`${this.props.location.search}`)
    }

    render() {
        return (
            <ElementList result={this.props.result} loading={this.props.loading} error={this.props.error}></ElementList>
        )
    }
}

HomeComponent.propTypes = {
    result: PropTypes.object.isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
    fetchProducts: PropTypes.func
}
const mapStateToProps = state => ({
    result: state.product.result,
    error: state.product.error,
    loading: state.general.loading
})

export default connect(mapStateToProps, { fetchProducts })(HomeComponent)
