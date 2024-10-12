import type { NextPage } from 'next'
import Image from 'next/image'
import Firstcomponent from '../components/Firstcomponent'
import Items from '../components/Items'
import Search from '../components/Search'
import Inspiration from '../components/Inspiration'
import Footer from '../components/Footer'
const Home: NextPage = () => {
  return (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <a className="navbar-brand -mb-1" href="#">
    <Image className=" rounded-full my-auto" src="/food.png" width="40" height="40" alt="logo"/>
  </a>
  <a className="navbar-brand -mt-1 textnew" href="#">Food Delight</a>
    </nav>
    <Firstcomponent/>
    <Items/>
    <Search/>
    <Inspiration/>
    <Footer/>
  </>
  )
}

export default Home