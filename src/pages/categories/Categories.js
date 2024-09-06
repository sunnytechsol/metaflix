import React, { Component } from 'react'
import MoviewCard from '../../components/cards/MoviewCard'
import Records from './Records'
export default class Categories extends Component {
    render() {
        return (
            <div className='moview-categories text-light mt-7'>
                <div className="container-fluid px-5">
                    <div className="heading">
                        <h3 className='text-uper'>English Movies</h3>
                        <hr />
                    </div>
                    <div className="body">
                        <div className="row">
                            {
                                Records.map((element) => {
                                   return <>
                                        <MoviewCard obj={element} />
                                    </>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}