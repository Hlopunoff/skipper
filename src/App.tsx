import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, {persistor} from './store';

import { Layout } from './components/layout/Layout';
import { MainPage } from './pages/mainPage/MainPage';
import { MentiPage } from './pages/mentiPage/MentiPage';
import { MentorPage } from './pages/mentorPage/MentorPage';
import { AuthPage } from './pages/authPage/AuthPage';
import { LoginWithEmail, LoginWithPhone } from './components/login/Login';
import { Register } from './components/register/Register';
import { NotFound } from './pages/errorPages/notFound/NotFound';
import { SettingsPage } from './pages/settingsPage/SettingsPage';

function App() {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<MainPage />} />
              <Route path='mentee/:menteeId' element={<MentiPage />} />
              <Route path='mentor/:mentorId' element={<MentorPage />} />
              <Route path='settings' element={<SettingsPage/>}/>
            </Route>
            <Route path='/auth' element={<AuthPage />}>
              <Route index element={<LoginWithEmail />} />
              <Route path='login-phone' element={<LoginWithPhone />} />
              <Route path='register' element={<Register />} />
            </Route>
            <Route path='*' element={<NotFound />} />
          </Routes>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App;
