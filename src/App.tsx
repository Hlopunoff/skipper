import {Routes, Route} from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { MentiPage } from './pages/mentiPage/MentiPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='menti' element={<MentiPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
