import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getMySelf } from './Redux/User/User.action';


//pages
import temp from './Components/temp';
import Home from './pages/home';
import Additems from './pages/additems';


//HOC
import HomeLayoutHOC from './HOC/Home.HOC';
<<<<<<< HEAD
import additems from './pages/additems';
=======
import CropItemLayoutHOC from './HOC/CropItem.HOC';
import Fruit from './pages/Fruit';
import Vegetables from './pages/Vegetables';
import Cereals from './pages/Cereals';
>>>>>>> 2eb299f921ca9a9031459943dff8e06406b862e9

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    if (localStorage.cropUser) dispatch(getMySelf());
  }, [])



  return (
    <>
<<<<<<< HEAD
      {/* <HomeLayoutHOC path="/" exact component={Home} /> */}
     
      <HomeLayoutHOC path="/" exact component={additems} />
      
=======
      <HomeLayoutHOC path="/" exact component={Home} />
      <CropItemLayoutHOC path="/fruit" exact component={Fruit}/>
      <CropItemLayoutHOC path="/vegetables" exact component={Vegetables}/>
      <CropItemLayoutHOC path="/cereals" exact component={Cereals}/>
      <CropItemLayoutHOC path="/cereals/:id" exact component={Cereals}/>
      <CropItemLayoutHOC path="/vegetables/:id" exact component={Vegetables}/>
      <CropItemLayoutHOC path="/fruit/:id" exact component={Fruit}/>
>>>>>>> 2eb299f921ca9a9031459943dff8e06406b862e9
    </>
  );
}

export default App;
