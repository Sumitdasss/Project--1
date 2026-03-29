
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Heading from './Componants/Heading'
import Produtc from './Componants/Produtc'
import { Fttore } from './Componants/Fttore'
import Cart from './Componants/pages/Cart'
import Productshow from './Products/Productshow'
import Login from './Componants/Login'
import Singup from './Componants/Singup'




function App() {
 

  return (
    <>
   <BrowserRouter>
    <Heading/>
    <Routes>
      <Route path='/' element={<Produtc></Produtc>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='/shop' element={<Productshow></Productshow>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/signup' element={<Singup></Singup>}></Route>
    
    </Routes>
<Fttore/>
    </BrowserRouter>
    </>
  )
}

export default App
