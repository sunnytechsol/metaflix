import React, { Component } from 'react'

export default class SliderCard extends Component {
    render() {
        return (
            <div class="owl-item active">
                <div class="card border-0 bg-dark3">
                    <div className="overlay">
                        <div className="img">
                            <img src={`${this.props.obj.img}`} alt="" className='card-img' height="230" />
                        </div>
                        <div className="play-it d-none">
                            <a href="/">
                                <i className="fa fa-4x fa-play text-light"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body pe-0">
                        <h6 className='font-s-17px font-w-b'>{this.props.obj.title}</h6>
                        <div className="info pt-1 font-s-13px">
                            <span>
                                <i className="fa fa-star text-red pe-1"></i>
                                <small>{this.props.obj.rating}</small>
                            </span>
                            <span className='ms-3'>
                                <i className="fa fa-clock text-red pe-1"></i>
                                <small>{this.props.obj.duration}</small>
                            </span>
                        </div>
                        <div className="info mt-2 font-s-13px">
                            <span>
                                <i className="fa fa-list text-red pe-1"></i>
                                <small>{this.props.obj.category}</small>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
