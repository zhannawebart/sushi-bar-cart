import './App.css';
import Cart from './Components/cart/Cart';
import Dishes from './Components/DishesComponents/Dishes';
import AllCategories from './Components/Filter/AllCategories';

function App() {
  return (
    <div className="App">

      <div className="cart-box">
        <AllCategories/>
        <Cart/>
      </div>

      <div className="img-box">
        <Dishes/>
      </div>

    </div>
  );
}

export default App;
