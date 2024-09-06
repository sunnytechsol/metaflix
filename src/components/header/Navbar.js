import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark2 fixed-top">
                <div className="container-fluid px-5">
                    <a className="navbar-brand" href="/"><h4><span>meta</span><span className='text-red'>Flix</span></h4></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse font-s-13px" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-uper" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link text-uper dropdown-toggle" href="/sd" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Movies
                                </a>
                                <ul className="dropdown-menu border-r-n bg-dark3">
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">English</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Indian</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Documentory</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link text-uper dropdown-toggle" href="/sd" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Animation
                                </a>
                                <ul className="dropdown-menu border-r-n bg-dark3">
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Movies</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Series</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Documentory</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link text-uper dropdown-toggle" href="/sd" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Anime
                                </a>
                                <ul className="dropdown-menu border-r-n bg-dark3">
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Movies</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Series</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Documentory</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link text-uper dropdown-toggle" href="/sd" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Tv & Web Series
                                </a>
                                <ul className="dropdown-menu border-r-n bg-dark3">
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">English</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Indian</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Foreign</NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown mx-2">
                                <a className="nav-link text-uper dropdown-toggle" href="/sd" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Hollywood
                                </a>
                                <ul className="dropdown-menu border-r-n bg-dark3">
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Horror</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Story</NavLink>
                                    </li>
                                    <li>
                                    <NavLink className="dropdown-item text-light" to="categories/english">Action</NavLink>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="d-flex align-items-center font-s-13px" role="search">
                            <button className='btn text-light me-3 search-button'>
                                <i className="fa fa-search"></i>
                            </button>
                            <a href="/" className='btn btn-sm btn-red py-1'>
                                <i className="fa fa-lock pe-1"></i>
                                <span>Sign In</span>
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
