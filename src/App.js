import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { originals, action, comedy } from "./urls";


// const component=React.lazy(()=>import './path')


  function App(){

  
  return (
    <div className="App">
     <NavBar/>
     <Banner />
     <RowPost title={'Originals'} url={originals} />
     <RowPost title={'Action'} url={action} isSmall />           
     <RowPost title={'Comedy'} url={comedy} isSmall />           

    </div>
  );
  }

export default App;
