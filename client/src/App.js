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
// <<<<<<< HEAD
import additems from './pages/additems';
// =======
import CropItemLayoutHOC from './HOC/CropItem.HOC';
import Fruit from './pages/Fruit';
import Vegetables from './pages/Vegetables';
import Cereals from './pages/Cereals';
import CropDetails from './Components/CropDetails';
import ContactUs from './pages/Contactus';
import Profile from './pages/profile';
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
     
      <HomeLayoutHOC path="/addcrop" exact component={additems} />
      
      <HomeLayoutHOC path="/" exact component={Home} />
      <CropItemLayoutHOC path="/fruit" exact component={Fruit}/>
      <CropItemLayoutHOC path="/vegetables" exact component={Vegetables}/>
      <CropItemLayoutHOC path="/cereals" exact component={Cereals}/>
      <CropItemLayoutHOC path="/cereals/:id" exact component={CropDetails}/>
      <CropItemLayoutHOC path="/vegetables/:id" exact component={CropDetails}/>
      <CropItemLayoutHOC path="/fruit/:id" exact component={CropDetails}/>
      <HomeLayoutHOC path="/contactus" exact component={ContactUs} />
      <HomeLayoutHOC path="/profile" exact component={Profile} />

    </>
  );
}

export default App;
