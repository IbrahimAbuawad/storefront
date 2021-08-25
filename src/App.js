// import './app.css';

import Header from "./components/header/Header.js";
import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddToList from "./components/AddToList/AddToList.js";
import Main from "./components/main/Main.js";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>

          <Route path="/addnew"  >
            <AddToList />
          </Route>

          <Route path="/" >
            <Main />
          </Route>




        </Switch>
        <Footer />

      </Router>

    </>
  );
}

export default App;