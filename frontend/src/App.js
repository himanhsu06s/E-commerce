import './App.css';
import { Navbar } from './Mycomponents/Navbar/Navbar';
import{ BrowserRouter,Routes,Route} from 'react-router-dom';
import { Shop } from './Page/Shop';
import { ShopCategory } from './Page/ShopCategory';
import {Product} from './Page/Product';
import {Cart} from './Page/Cart';
import{LoginSingup} from './Page/LoginSingup';
import { Footer } from './Mycomponents/Footer/Footer';
import banners_mens from './Mycomponents/Assets/banner_mens.png';
import banners_women from './Mycomponents/Assets/banner_women.png';
import banners_kids from './Mycomponents/Assets/banner_kids.png';
import { SingUp } from './Page/SingUp';

function App() {
  
  {/*const register = async () =>{};

  const login = async () =>{};

const logout = async () =>{};*/}


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner ={banners_mens} category="men"/>}/>
          <Route path='/women' element={<ShopCategory banner ={banners_women} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner ={banners_kids} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSingup/>}/>
          <Route path='/singup' element={<SingUp/>}/>


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
