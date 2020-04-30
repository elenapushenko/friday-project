import React from 'react';
import './App.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./n1-main/m2-bll/store";
import Main from "./n1-main/m1-ui/Main";

const App: React.FC = () => {
  return (
    <div className="App">
      <HashRouter>
        <Provider store={store}>
          <Main/>
        </Provider>
      </HashRouter>
    </div>
  )
};

export default App;
