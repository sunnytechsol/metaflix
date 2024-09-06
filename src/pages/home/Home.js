import React, { Component } from 'react'
import Banner from './components/banners/Banner'
import Carousel from './components/carousel/Carousel'
import EnglishMovies from './components/englishMovies/EnglishMovies'
import HindihMovies from './components/hindihMovies/HindihMovies'
import Popular from './components/popular/Popular'
import SouthMovies from './components/southMovies/SouthMovies'

export default class Home extends Component {
  render() {
    return (
      <>
        <Carousel />
        <Popular />
        <EnglishMovies />
        <HindihMovies />
        <SouthMovies />
        <Banner obj={
          {
            img: 'https://occ-0-1623-769.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f',
            heading: 'Create profiles for kids.',
            description: 'Send kids on adventures with their favorite characters in a space made just for them—free with your membership.'
          }
        } />
      </>
    )
  }
}
