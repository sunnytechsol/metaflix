import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
// import Freelancers from '../../remoteJobs/src/Pages/Freelancers/Freelancers';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Search from './components/others/Search';
import Categories from './pages/categories/Categories';
import Home from './pages/home/Home';

export default class App extends Component {
  render() {
    return (
      <div className='page-wrapper bg-dark1'>
        <Header />
        <Routes >
          <Route path='/' element={<Home />} />
          {/* <Route path='freelancers' element={<Freelancers />} /> */}
          <Route path='categories/english' element={<Categories />} />
        </Routes>
        <Footer />
        <Search />
      </div>
    )
  }
}
