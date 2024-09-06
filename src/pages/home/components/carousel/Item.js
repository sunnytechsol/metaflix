import React, { Component } from 'react'

export default class Item extends Component {
    render() {
        return (
            <div className={`carousel-item ${this.props.obj.active}`}>
                <img src={`${this.props.obj.img}`} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block p-0">
                    <div className="caption-content d-flex flex-column justify-content-center text-start ms-5  pt-5">
                        <h1 className='font-s-3em'>Hansan: Rising Dragon (2022)</h1>
                        <div className="other-info mt-2 mb-4">
                            <span className='text-red'>
                                <i className="fa fa-star pe-1"></i>
                                <strong>{this.props.obj.rating}</strong>
                            </span>
                            <span className='text-red mx-3'>
                                <i className="fa fa-list pe-1"></i>
                                <strong>Admin</strong>
                            </span>
                            <span className='text-red'>
                                <i className="fa fa-calendar pe-1"></i>
                                <strong>{this.props.obj.date}</strong>
                            </span>
                            <span className='text-red mx-3'>
                                <strong>{this.props.obj.percent}</strong>
                            </span>
                            <a href="/f" className="btn btn-sm btn-light">WEB-DL</a>
                        </div>
                        <p>{this.props.obj.description}</p>
                        <div className="button mt-3">
                            <a href="/sd" className="btn btn-red">
                                <i className="fa fa-angle-right pe-3"></i>
                                <span>VIEW NOW</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
