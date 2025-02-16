import './App.css';
import DisplayFruit from './components/DisplayFruit';
import Footer from './components/Footer';
import Header from './components/Header';
import fruitList from './components/FruitDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <DisplayFruit props={fruitList}/>
      <Footer />
    </div>
  );
}

export default App;
