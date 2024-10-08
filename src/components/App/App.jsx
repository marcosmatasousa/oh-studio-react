import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import ImageRow from '../ImageRow/ImageRow'
import Work from '../Work/Work'
import Footer from '../Footer/Footer'

import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <Main />
      <ImageRow
        leftImage="model-girl.jpg"
        rightImage="model-boy.jpg" 
      />
      <ImageRow
        leftImage="phone.jpg"
        rightImage="computer.jpg" 
      />
      <ImageRow
        leftImage="books.jfif"
        rightImage="coffee.jpg" 
      />
      <Work />
      <Footer />
    </>
  )
}

export default App
