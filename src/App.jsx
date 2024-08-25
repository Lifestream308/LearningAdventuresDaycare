// import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import MainSectionsComponent from './components/MainSectionsComponent'

// const AboutComponent = React.lazy(() => import('./components/AboutComponent'))
// const ContactComponent = React.lazy(() => import('./components/ContactComponent'))
// const FooterComponent = React.lazy(() => import('./components/FooterComponent'))
import AboutComponent from './components/AboutComponent'
import ContactComponent from './components/ContactComponent'
import FooterComponent from './components/FooterComponent'

function App() {

  return (
    <>
      <HeaderComponent />

      <Routes>
        <Route path='/' element={ <MainSectionsComponent /> } />
        <Route path='/about' element={ <AboutComponent /> } />
        <Route path='/contact' element={ <ContactComponent /> } />
      </Routes>

      <FooterComponent />
    </>
  )
}

export default App
