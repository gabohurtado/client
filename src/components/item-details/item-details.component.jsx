// React 
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import { showDetails } from '../../store/actions/products.actions'

// SCSS
import './item-details.scss'

class ItemDetailComponent extends Component {
    componentDidMount() {
        const { id } = this.props.match.params
        this.props.showDetails(id)
    }

    render() {
        //Error
        const error = this.props.error !== '' ? (
            <div className="d-flex justify-content-center">
                <span className="text-danger">
                    {this.props.error}
                </span>
            </div>
        ) : (
                <span></span>
            )


        // Item details
        const item = this.props.item.item ? (
            <div className="row container-details">
                <div className="image col-md-9 col-sm-8">
                    <span>
                        <img src={this.props.item.item.picture} alt={this.props.item.item.title} />
                    </span>
                <div className="col-md-12 description-container">
                    <span className="product-description">Descripción del producto</span>
                    <p className="text-justify">{this.props.item.item.description}</p>
                </div>
                </div>
                <div className="details col-md-3 col-sm-4">
                    <div>
                        <span>{this.props.item.item.condition}</span> - <span>{this.props.item.item.sold_quantity} vendidos</span>
                    </div>
                    <div>
                        <h5 className="title">{this.props.item.item.title}</h5>
                    </div>
                    <div>
                        <h3 className="price">${this.props.item.item.price.amount}</h3>
                    </div>
                    <button type="button" className="btn btn-primary btn-lg btn-block">Comprar</button>
                </div>
            </div>
        ) : error?(<span>{error}</span>):(<span></span>)

        const loading = this.props.loading ? (
            <div className="row container-details-loading">
                <div className="col-md-9 col-sm-8">
                    <div className="image"></div>
                    <div className="col-md-12 description-container" >
                        <div className="product-description"></div>
                        <p className="text-justify"></p>
                    </div>
                </div>
                <div className="details col-md-3 col-sm-4">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        ) : (
                    <div>{item}</div>
            )
        return (
            <div>
                {loading}
            </div>
        )
    }
}

ItemDetailComponent.propTypes = {
    item: PropTypes.object.isRequired,
    loading: PropTypes.bool,
    error: PropTypes.string,
    showDetails: PropTypes.func
}

const mapStateToProps = state => ({
    item: state.product.item,
    error: state.product.error,
    loading: state.general.loading
})

export default connect(mapStateToProps, { showDetails })(ItemDetailComponent)