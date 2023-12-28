import {BrowserRouter,Routes,Route} from 'react-router-dom';

import Books from './pages/Books';
import Category from './pages/Category';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
      <Routes>
        <Route path='/'     element={<Books/>}/>
        <Route path='/categories'     element={<Category/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
