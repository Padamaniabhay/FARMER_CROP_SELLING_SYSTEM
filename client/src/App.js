import './App.css';
import temp from './Components/temp';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

// import { getMySelf } from './Redux/User/User.action';


//HOC
import HomeLayoutHOC from './HOC/Home.HOC';

function App() {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   if (localStorage.cropUser) dispatch(getMySelf());
  // }, [])



  return (
    <>
      <HomeLayoutHOC path="/" exact component={temp} />
    </>
  );
}

export default App;
