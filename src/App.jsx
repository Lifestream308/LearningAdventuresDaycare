import React, {Suspense} from 'react'
import { Route, Routes } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import MainSectionsComponent from './components/MainSectionsComponent'

const AboutComponent = React.lazy(() => import('./components/AboutComponent'))
const ContactComponent = React.lazy(() => import('./components/ContactComponent'))
const FooterComponent = React.lazy(() => import('./components/FooterComponent'))
// import AboutComponent from './components/AboutComponent'
// import ContactComponent from './components/ContactComponent'
// import FooterComponent from './components/FooterComponent'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <HeaderComponent />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={ <MainSectionsComponent /> } />
          <Route path='/about' element={ <AboutComponent /> } />
          <Route path='/contact' element={ <ContactComponent /> } />
        </Routes>
      </Suspense>

      <Suspense fallback={<div>Loading...</div>}>
        <FooterComponent />
      </Suspense>
    </>
  )
}

export default App
