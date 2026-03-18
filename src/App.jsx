
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Heading from './Componants/Heading'
import Produtc from './Componants/Produtc'
import { Fttore } from './Componants/Fttore'
import Cart from './Componants/pages/Cart'




function App() {
 

  return (
    <>
   <BrowserRouter>
    <Heading/>
    <Routes>
      <Route path='/' element={<Produtc></Produtc>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
    
    </Routes>
<Fttore/>
    </BrowserRouter>
    </>
  )
}

export default App
