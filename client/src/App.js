import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMySelf } from './Redux/User/User.action';


//pages
import temp from './Components/temp';
import Home from './pages/home';


//HOC
import HomeLayoutHOC from './HOC/Home.HOC';
import CropItemLayoutHOC from './HOC/CropItem.HOC';
import Fruit from './pages/Fruit';
import Vegetables from './pages/Vegetables';
import Cereals from './pages/Cereals';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.cropUser) dispatch(getMySelf());
  }, [])



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
