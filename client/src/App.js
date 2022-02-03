import './App.css';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { getMySelf } from './Redux/User/User.action';


//pages
import temp from './Components/temp';
import Home from './pages/home';
import Additems from './pages/additems';

//HOC
import HomeLayoutHOC from './HOC/Home.HOC';
import additems from './pages/additems';

function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (localStorage.cropUser) dispatch(getMySelf());
  // }, [])



  return (
    <>
      {/* <HomeLayoutHOC path="/" exact component={Home} /> */}
     
      <HomeLayoutHOC path="/" exact component={additems} />
      
    </>
  );
}

export default App;
