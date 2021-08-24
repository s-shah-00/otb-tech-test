import React from 'react';
import ReactDOM from 'react-dom';

import SearchData from './dataProvider';
import Search from './components/Search';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Search items={SearchData} />
  </React.StrictMode>,
  document.getElementById('root')
);
