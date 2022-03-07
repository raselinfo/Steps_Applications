import React, { useState } from 'react';
import Header from './components/Header';
import DataContext from './components/context';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SearchCategory from './components/Category';
import CategoryResult from './components/CategoryResult';
const App = () => {
  const [items, setItems] = useState([])
  return (
    <>
      <DataContext.Provider value={[items, setItems]}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<SearchCategory />} />
            <Route path="post-service-request/:subcategory" element={<CategoryResult />} />
          </Routes>
        </BrowserRouter>,
      </DataContext.Provider>
    </>
  );
};

export default App;