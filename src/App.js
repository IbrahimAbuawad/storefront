// import './app.css';

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer";
import Products from "./components/products/Products";
import { Provider } from 'react-redux';
import store from './Store/index';


function App() {
  return (
    <>
      <Provider store={store()}>
        <Header />
        <br />
        <Products />
        <br />
        <Footer />
      </Provider>
    </>
  );
}

export default App;