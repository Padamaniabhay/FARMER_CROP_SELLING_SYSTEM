import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMySelf } from './Redux/User/User.action';
import axios from 'axios';

//pages
import temp from './Components/temp';
import Home from './pages/home';


//HOC
import HomeLayoutHOC from './HOC/Home.HOC';
import CropItemLayoutHOC from './HOC/CropItem.HOC';
import Fruit from './pages/Fruit';
import Vegetables from './pages/Vegetables';
import Cereals from './pages/Cereals';


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
      <HomeLayoutHOC path="/" exact component={Home} />
      <CropItemLayoutHOC path="/fruit" exact component={Fruit}/>
      <CropItemLayoutHOC path="/vegetables" exact component={Vegetables}/>
      <CropItemLayoutHOC path="/cereals" exact component={Cereals}/>
      <CropItemLayoutHOC path="/cereals/:id" exact component={Cereals}/>
      <CropItemLayoutHOC path="/vegetables/:id" exact component={Vegetables}/>
      <CropItemLayoutHOC path="/fruit/:id" exact component={Fruit}/>
    </>
  );
}

export default App;
