import {Routes, Route} from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { MentiPage } from './pages/mentiPage/MentiPage';
import { MentorPage } from './pages/mentorPage/MentorPage';
import { RegisterPage } from './pages/registerPage/RegisterPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='menti' element={<MentiPage/>}/>
          <Route path='mentor-page' element={<MentorPage/>}/>
        </Route>
        <Route path='/register' element={<RegisterPage/>}/>
      </Routes>
    </>
  );
}

export default App;
