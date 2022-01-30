import './App.css';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { getMySelf } from './Redux/User/User.action';


//pages
import temp from './Components/temp';
import Home from './pages/home';

//HOC
import HomeLayoutHOC from './HOC/Home.HOC';

function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (localStorage.cropUser) dispatch(getMySelf());
  // }, [])



  return (
    <>
      <HomeLayoutHOC path="/" exact component={Home} />
    </>
  );
}

export default App;
