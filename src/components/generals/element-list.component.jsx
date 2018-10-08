import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

// SCSS
import './element-list.component.scss'

class ElementListComponent extends Component {
    render() {

        const items = this.props.loading ? (
            <div>
                <div className="media-loading row">
                    <div className="thumbnail col-md-2">
                    </div>
                    <div className="media-body col-md-8">
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                    </div>
                    <div className="place col-md-2 col-md-2"></div>
                </div>
                <div className="media-loading row">
                    <div className="thumbnail col-md-2">
                    </div>
                    <div className="media-body col-md-8">
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                    </div>
                    <div className="place col-md-2 col-md-2"></div>
                </div>
                <div className="media-loading row">
                    <div className="thumbnail col-md-2">
                    </div>
                    <div className="media-body col-md-8">
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                        {/* eslint-disable-next-line */}
                        <h5 className="price"></h5>
                    </div>
                    <div className="place col-md-2 col-md-2"></div>
                </div>
            </div>
        ) : this.props.result.items ? this.props.result.items.map(item => (
                <NavLink key={item.id} to={`/item/${item.id}`} className="no-styles-link">
                    <div className="media" key={item.id}>
                        <span className="thumbnail">
                            <img src={item.picture} alt="item.title" />
                        </span>
                        <div className="media-body">
                            <h5 className="price">${item.price.amount} </h5><span className={item.free_shipping?'shipping':''}></span>
                            <h4 className="title">{item.title}</h4>
                        </div>
                        <span className="place col-md-2">{item.address_state}</span>
                    </div>
                </NavLink>
        )) : this.props.error !== '' ? (
            <div className="d-flex justify-content-center">
                <span className="text-danger">
                    {this.props.error}
                </span>
            </div>
        ) : (
                        <span></span>
                    )

        // const items = this.props.result.items ? this.props.result.items.map(item => (
        //     <div className="media" key={item.id}>
        //         <span className="thumbnail">
        //             <img src={item.picture} alt="Generic placeholder image" />
        //         </span>
        //         <div className="media-body">
        //             <h5 className="price">${item.price.amount}</h5>
        //             <NavLink to={`/item/${item.id}`} className="title">{item.title}</NavLink>
        //         </div>
        //         <span className="place col-md-2">{item.address_state}</span>
        //     </div>
        // )) : (
        //         <div>
        //             <div className="media-loading row">
        //                 <div className="thumbnail col-md-2">
        //                 </div>
        //                 <div className="media-body col-md-8">
        //                     <h5 className="price"></h5>
        //                     <h5 className="price"></h5>
        //                     <h5 className="price"></h5>
        //                 </div>
        //                 <div className="place col-md-2 col-md-2"></div>
        //             </div>
        //             <div className="media-loading row">
        //                 <div className="thumbnail col-md-2">
        //                 </div>
        //                 <div className="media-body col-md-8">
        //                     <h5 className="price"></h5>
        //                     <h5 className="price"></h5>
        //                     <h5 className="price"></h5>
        //                 </div>
        //                 <div className="place col-md-2 col-md-2"></div>
        //             </div>
        //             <div className="media-loading row">
        //                 <div className="thumbnail col-md-2">
        //                 </div>
        //                 <div className="media-body col-md-8">
        //                     <h5 className="price"></h5>
        //                     <h5 className="price"></h5>
        //                     <h5 className="price"></h5>
        //                 </div>
        //                 <div className="place col-md-2 col-md-2"></div>
        //             </div>
        //         </div>
        //     )



        return (
            <div>
                {items}
                {this.props.children}
            </div>
        )
    }
}

export default ElementListComponent