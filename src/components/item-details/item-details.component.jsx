// React 
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// History
import history from '../../history'

// Redux
import { connect } from 'react-redux'
import { showDetails } from '../../store/actions/products.actions'

class ItemDetailComponent extends Component {
    constructor(props) {
        super(props)
        // console.log('Details', props.match.params);
    }

    componentWillReceiveProps(newProps) {
        // console.log('Details',this.props.location.search);
        // if(this.props.)
    }

    componentDidMount() {
        const { id } = this.props.match.params
        this.props.showDetails(id)
    }

    render() {
        // Item details
        const item = this.props.item.item ? (
            <div>
                <span>{this.props.item.item.title}</span>
            </div>
        ) : (<span></span>)

        //Error
        const error = this.props.error ? (
            <span className="text-red">Error : this.props.error</span>
        ) : (
                <span></span>
            )

        const loading = this.props.loading ? (
            <span>loading...</span>
        ) : (
                item
            )
        console.log('Await', item);

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
    showDetails: PropTypes.func
}

const mapStateToProps = state => ({
    item: state.product.item,
    loading: state.general.loading
})

export default connect(mapStateToProps, { showDetails })(ItemDetailComponent)