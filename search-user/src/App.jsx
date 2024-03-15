import React from 'react'
import Navbar from './components/navbar/Navbar'
import Search from './components/Search/Search'
import Footer from './components/Footer/Footer'
 
 const App = () => {
   return (
     <div className='app_container'>
           <Navbar/>
           <Search/>
           <Footer/>
     </div>
   )
 }
 
 export default App