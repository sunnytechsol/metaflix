import React, { Component } from 'react'
import SliderCard from '../../../../components/cards/SliderCard'
import Records from './Records'
export default class HindihMovies extends Component {
  render() {
    return (
        <div className='hindi-movies text-light my-5'>
        <div className="container-fluid px-5">
            <div className="heading d-flex justify-content-between align-items-center">
                <h4 className='text-uper'>Hindi Movies</h4>
                <div className="slide-buttons">
                    <a href="/" className='btn btn-sm btn-red py-0'>See All (500)</a>
                </div>
            </div>
            <hr />
            <div className="movies-list mt-4">
                <div class="owl-carousel owl-theme owl-loaded owl-drag" id="hindi-movies">
                    <div class="owl-stage-outer">
                        <div class="owl-stage">
                            {
                                   
                            Records.map((element) => {
                                return <>
                                    <SliderCard obj = {element} />
                                </>
                            })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
