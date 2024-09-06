import React, { Component } from 'react'

export default class Search extends Component {
    render() {
        return (
            <div className="search-wrapper d-flex justify-content-center align-items-center">
                <div className="search-content text-light text-center">
                    <h1>Search Your Movie</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aut pariatur expedita earum deleniti cumque? Nesciunt quaerat, corporis, obcaecati ad harum eos cumque, exercitationem earum doloribus quasi dolore! Doloribus, quis.</p>
                    <form action="/" method="get">
                        <div className="form-group">
                            <div className="d-flex justify-content-center align-items-center">
                                <input type="search" name="" className='search-input' placeholder='Searc...' />
                                <button type='submit' className='search-btn btn-red border-r-n border-0'>SEARCH</button>
                            </div>
                        </div>
                    </form>
                </div>
                <button className='btn text-red close-search-button'>
                    <i className="fa fa-x fa-2x"></i>
                </button>
            </div>
        )
    }
}
