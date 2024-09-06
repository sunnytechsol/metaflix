import React, { Component } from 'react'

export default class Banner extends Component {
  render() {
    return (
      <div className='banner my-5'>
        <div className="container-fluid px-5">
          <hr />
        <div className="row">
            <div className="col-md-6">
                <img src={`${this.props.obj.img}`} className='card-img border-r-20' alt="" />
            </div>
            <div className="col-md-6">
                <div className="content h-100 d-flex flex-column justify-content-center align-items- text-light">
                    <h2 className='font-s-5em font-w-b'>{this.props.obj.heading}.</h2>
                    <p className='my-3'>{this.props.obj.description}</p>
                    <div className="mt-2">
                        <a href="/" className="btn shadow-lg btn-red px-4">Read More</a>
                    </div>
                </div>
            </div>
        </div>
        <hr />
        </div>
      </div>
    )
  }
}
