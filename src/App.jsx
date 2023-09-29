import './index.css'
import './App.css'
import { Header } from "./components/Header/Header"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { Footer } from "./components/Footer/Footer"
import { PageNotFound } from './components/PageNotFound/PageNotFound'
import { CartProvider } from "./context/CartContext";
import WishView from "./components/WishView/WishView";
import CartView from "./components/CartView/CartView";
import { SearchProvider } from './context/SearchContext'
import Checkout from "./components/Checkout/Checkout";
import { WishProvider } from './context/WishContext'
import { ContactRoute } from './components/ContactRoute/ContactRoute'
import { AboutRoute } from './components/AboutRoute/AboutRoute'
import { HomeRoute } from './components/HomeRoute/HomeRoute'
import { CategoryRoute } from './components/CategoryRoute/CategoryRoute'




function App() {

  
  return (
    <div>        
          <CartProvider>
            <WishProvider>
              <BrowserRouter>
              
                <SearchProvider>
                  <Header />        
                  
                  <Routes>
                    <Route path="/" element={ <HomeRoute/> }/>
                    
                    <Route path="/products/:categoryId" element={ <CategoryRoute/> }/>
                    
                    <Route path="/detail/:itemId" element={ <ItemDetailContainer /> }/>                    
                    
                    <Route path="/wish" element={ <WishView /> }/>

                    <Route path="/cart" element={ <CartView /> }/>
                    
                    <Route path="/checkout" element={ <Checkout/> }/>
                  
                    <Route path="/contact" element={ <ContactRoute/> }/>                    

                    <Route path="/about" element={ <AboutRoute/> }/>

                    <Route path="/*" element={ <PageNotFound/> }/>          
                  </Routes>
                  <Footer/>  
                </SearchProvider>

              </BrowserRouter>
            </WishProvider>
          </CartProvider>        
    </div>
  )
}

export default App