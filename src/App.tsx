import {Routes, Route} from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { MentiPage } from './pages/mentiPage/MentiPage';
import { MentorPage } from './pages/mentorPage/MentorPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='menti' element={<MentiPage/>}/>
          <Route path='mentor-page' element={<MentorPage/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
