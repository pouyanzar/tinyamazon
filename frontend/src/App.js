import { BrowserRouter, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
            <header>
                <div>
                    <a className="brand" href="/">
                        Tiny Amazon
                    </a>     
                </div>
                <div>
                    <a href="/cart">Cart</a>
                    <a href="/signin">Sign In</a>
                </div>
            </header>
            <main className="main">
              <Route path='/product/:id' component={ProductScreen}/>
              <Route path='/' component={HomeScreen} exact />
            </main>
            <footer className="footer">
                All right reserved.
            </footer>
        </div>
    </BrowserRouter>
    
  );
}

export default App;
