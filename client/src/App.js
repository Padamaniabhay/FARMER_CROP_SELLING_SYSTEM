import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMySelf } from './Redux/User/User.action';
import axios from 'axios';

//pages
import temp from './Components/temp';
import Home from './pages/home';
import Additems from './pages/additems';


//HOC
import HomeLayoutHOC from './HOC/Home.HOC';

// =======
import CropItemLayoutHOC from './HOC/CropItem.HOC';
import Fruit from './pages/Fruit';
import Vegetables from './pages/Vegetables';
import Cereals from './pages/Cereals';
import CropDetails from './Components/CropDetails';
import ContactUs from './pages/Contactus';
import Profile from './pages/profile';
import Cart from './pages/Cart';
import Checkout from './pages/checkout';
import Aboutus from "./pages/aboutus";
import GoogleAuth from './pages/GoogleAuth';

// >>>>>>> 2eb299f921ca9a9031459943dff8e06406b862e9


if (localStorage.cropUser) {
  const { token } = JSON.parse(localStorage.cropUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}


function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.cropUser) dispatch(getMySelf());
  }, []);



  return (
    <>

      <HomeLayoutHOC path="/addcrop" exact component={Additems} />

      <HomeLayoutHOC path="/" exact component={Home} />
      <HomeLayoutHOC path="/google/:token" exact component={GoogleAuth} />
      <CropItemLayoutHOC path="/fruit" exact component={Fruit} />
      <CropItemLayoutHOC path="/vegetables" exact component={Vegetables} />
      <CropItemLayoutHOC path="/cereals" exact component={Cereals} />
      <CropItemLayoutHOC path="/:category/:id" exact component={CropDetails} />
      <HomeLayoutHOC path="/contactus" exact component={ContactUs} />
      <HomeLayoutHOC path="/profile" exact component={Profile} />
      <HomeLayoutHOC path="/cart" exact component={Cart} />
      <HomeLayoutHOC path="/order" exact component={Checkout} />
      <HomeLayoutHOC path="/aboutus" exact component={Aboutus} />
    </>
  );
}

export default App;
