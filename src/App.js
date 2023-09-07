import React from 'react'
import Navbar from './components/navbar/Navbar'
import { action, originals, comedy, horror } from './urls'
import './App.css'
import Banner from './components/banner/Banner'
import RowPost from './components/rowPost/RowPost'

function App () {
  return (
    <>
    <Navbar />
    <Banner />
    <RowPost title='Netflix Original' url={originals}/>
    <RowPost title='Action' isSmall url={action}/>
    <RowPost title='Comedy' isSmall url={comedy}/>
    <RowPost title='Horror' isSmall url={horror}/>
    </>
  )
}

export default App