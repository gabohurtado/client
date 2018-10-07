// React 
import React, { Component } from 'react';

// SCSS
import './breadcrumb.component.scss'

// Redux
import { connect } from "react-redux";


class BreadcrumbComponent extends Component {
    render() {
            var breadcrumb = (this.props.product.path_from_root && this.props.product.path_from_root.length > 0)?this.props.product.path_from_root.map(path => (
                <li key={path.id} className="breadcrumb-item">{path.name}</li>
            )):(<li></li>)
        
        return (
            <nav aria-label="breadcrumb">
               <ol className="breadcrumb p-1">
                    {breadcrumb}
                </ol>
            </nav>
        )

    }
}

const mapStateToProps = state => ({
    product: state.product,
});

export default connect(mapStateToProps, {})(BreadcrumbComponent)