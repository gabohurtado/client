import React, { Component } from "react";
import {NavLink} from 'react-router-dom'

import "./NavBar.scss";

import history from "../../history";
import BreadcrumbComponent from "../breadcrumb/breadcrumb.component";

class NavbarComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const criteris = event.target.elements[0].value;
        history.push(`/search?q=${criteris}`, { some: "state" });
    }

    render() {
            
        return (
            <div>
                <nav className="navbar navbar-expand-lg d-flex justify-content-center row">
                    <NavLink to="/" className="navbar-brand" href="#"> </NavLink>
                    <form className="col-md-9" onSubmit={this.handleSubmit}>
                        <div className="">
                            <div className="col-md-12 d-flex">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Nunca dejes de buscar"
                                    autoFocus
                                />
                                <button type="submit" className="nav-search-btn">
                                </button>
                            </div>
                        </div>
                    </form>
                </nav>
                <BreadcrumbComponent/>
            </div>
        );
    }
}

export default NavbarComponent;
