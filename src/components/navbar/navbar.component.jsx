import React, { Component } from "react";

import "./NavBar.scss";

// Redux
import { PropTypes } from "prop-types";
import { fetchProducts } from "../../store/actions/products.actions";
import { connect } from "react-redux";

import history from "../../history";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        // const repo = event.target.elements[1].value
        // const path = `/repos/${userName}/${repo}`
        history.push(`/search?q=${userName}`, { some: "state" });
        // console.log('Navbar', history.location);
        // this.context.router.push(path)
        // console.log(path)
    }

    componentWillMount() {
        // this.props.fetchProducts()
        // console.log(this.props);
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg d-flex justify-content-center row">
                    <a className="navbar-brand"> </a>
                    <form className="col-md-9" onSubmit={this.handleSubmit}>
                        <div className="">
                            <div className="col-md-12 d-flex">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nunca dejes de buscar"
                                    autoFocus
                                />
                                <button type="submit" class="nav-search-btn">
                                </button>
                            </div>
                        </div>
                    </form>
                </nav>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb p-1">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item"><a href="#">Library</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Data</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

NavbarComponent.propTypes = {
    items: PropTypes.array,
    fetchProducts: PropTypes.func
};

const mapStateToProps = state => ({
    items: state.product.items
});

export default connect(
    mapStateToProps,
    { fetchProducts }
)(NavbarComponent);
