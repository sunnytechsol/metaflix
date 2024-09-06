import React, { Component } from 'react'
import Item from './Item'
import Records from './Records'

export default class Carousel extends Component {
    render() {
        return (
            <div id="topCarousel" className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner">
                    {
                        Records.map((element) => {
                            return <>
                                <Item obj={element} />
                            </>
                        })
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#topCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#topCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        )
    }
}
