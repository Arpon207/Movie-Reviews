import "./App.css";
import Banner from './Components/Banner/Banner';
import Header from "./Components/Header/Header";
import Reviews from "./Components/Reviews/Reviews";

function App() {
    return <div className="App">
      <Header/>
      <Banner/>
      <Reviews/>
    </div>;
}

export default App;
