import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
        <footer className='bg-dark2 text-light mt-5'>
            <div className="container-fluid p-5 pb-1">
                <div className="row pb-2">
                    <div className="col-md-6">
                        <div className="heaading mb-3">
                            <h2>
                                <span>meta</span>
                                <strong className='text-red'>Flix</strong>
                            </h2>
                        </div>
                        <div className="description">
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut suscipit tenetur quis asperiores corporis molestiae magni maiores accusamus sapiente maxime eligendi officia, voluptates ipsum praesentium.</p>
                        </div>
                        <div className="sosials">
                            <div className="links">
                                <a href="/" className=''>
                                    <i className="fab fa-facebook bg-red text-light rounded-circle p-1"></i>
                                </a>
                                <a href="/" className='mx-2'>
                                    <i className="fab fa-twitter bg-red text-light rounded-circle p-1"></i>
                                </a>
                                <a href="/" className=''>
                                    <i className="fab fa-instagram bg-red text-light rounded-circle p-1"></i>
                                </a>
                                <a href="/" className='mx-2'>
                                    <i className="fab fa-youtube bg-red text-light rounded-circle p-1"></i>
                                </a>
                                <a href="/" className=''>
                                    <i className="fab fa-google bg-red text-light rounded-circle p-1"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="heading pt-3">
                            <h6>Browse</h6>
                            <ul className="nav flex-column mt-3">
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>About Us</span>
                                    </a>
                                </li>
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>Contact Us</span>
                                    </a>
                                </li>
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>Our Team</span>
                                    </a>
                                </li>
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>Privacy Policy</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="heading pt-3">
                            <h6>Top Categories</h6>
                            <ul className="nav flex-column mt-3">
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>Hollywood</span>
                                    </a>
                                </li>
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>Bollywood</span>
                                    </a>
                                </li>
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>Tollywood</span>
                                    </a>
                                </li>
                                <li className="nav-item my-0 py-0">
                                    <a href="/" className="nav-link my-0 py-0 text-light ps-0">
                                        <i className="fa fa-arrow-right pe-2"></i>
                                        <span>Lollywood</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <div className="heading pt-3">
                            <h6>Download App</h6>
                            <div className="apss mt-3">
                                <div className="android">
                                    <img src="https://flixmx.com/static/images/google-play.png" alt="" height="50" />
                                </div>
                                <div className="ios mt-2">
                                    <img src="https://flixmx.com/static/images/app-store.png" alt="" height="50" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="copyright text-center">
                    <p>Copyright 2021-2022 metaflix.com</p>
                </div>
            </div>
        </footer>
    )
  }
}
