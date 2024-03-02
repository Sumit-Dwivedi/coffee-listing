import './App.css';
import bgImage from './assests/images/dccl--frontend-simple-coffee-listing/bg-cafe.jpg';
import Collection from './components/collection';
function App() {
  return (
    <div>
      <img className="backImage" src={bgImage}/>
      <Collection/>
    </div>
  );
}

export default App;
