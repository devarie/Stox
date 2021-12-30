import './App.css';
import ResponsiveAppBar from './header';
import Swiper from './components/swiper';
import CustomizedAccordions from './accordions'

function App() {
  return (
    <div>
    <ResponsiveAppBar/>
      <Swiper/>
      <CustomizedAccordions/>
      </div> 
  );
}

export default App;
