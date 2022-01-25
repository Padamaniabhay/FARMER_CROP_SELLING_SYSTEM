import './App.css';
import temp from './Components/temp';


//HOC
import HomeLayoutHOC from './HOC/Home.HOC';

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={temp} />
    </>
  );
}

export default App;
