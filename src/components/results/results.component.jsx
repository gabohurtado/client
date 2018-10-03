// React 
import React, { Component } from 'react';
import PropTypes from 'prop-types'

// Redux
import { connect } from 'react-redux'
import {fetchProducts} from '../../store/actions/products.actions'

class ResultsComponent extends Component {
    constructor(props){
        super(props)

        console.log('ResultsComponent');
        

        // console.log(this.props);
        // console.log('Home', this.props.location.search);
        
        
    }

    componentWillReceiveProps(newProps){
        console.log('Home change Props', newProps.location.search)
        this.props.fetchProducts(`${newProps.location.search}`)
    }

    componentWillMount(){
        console.log(this.props);
        
    }

    render(){
        console.log('Render Home',this.props.items);
        const items = this.props.items.map(item => (
            <li>{item.title}</li>
        ))
        console.log('Render Home',items);
        
        return (
            <div>
                <h1 className="text-white">Home</h1>
                <ul>
                    {items}
                </ul>
                {this.props.children}
            </div>
        )
    }
}

ResultsComponent.propTypes = {
    items: PropTypes.array.isRequired,
    fetchProducts: PropTypes.func
  }
const mapStateToProps = state => ({
    items: state.product.items
})

export default connect(mapStateToProps, {fetchProducts})(ResultsComponent)
