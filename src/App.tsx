import {Routes, Route} from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { MentiPage } from './pages/mentiPage/MentiPage';
import { MentorPage } from './pages/mentorPage/MentorPage';
import { AuthPage } from './pages/authPage/AuthPage';
import { LoginWithEmail, LoginWithPhone } from './components/login/Login';
import { Register } from './components/register/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='mentee' element={<MentiPage/>}/>
          <Route path='mentor' element={<MentorPage/>}/>
        </Route>
        <Route path='/auth' element={<AuthPage/>}>
          <Route index element={<LoginWithEmail/>}/>
          <Route path='login-phone' element={<LoginWithPhone/>}/>
          <Route path='register' element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
