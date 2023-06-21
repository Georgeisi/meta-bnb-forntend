import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import { HomePage } from './pages';
import ErrorBoundary from './components/error-boundary/ErrorBoundary';
import GeneralLoading from './components/general-loading/GeneralLoading';
import DefaultLayout from './layouts/DefaultLayout';
import PlaceToStay from './pages/place-to-stay/PlaceToStay';
import Login from './components/login/Login';
import SignUP from './components/signup/SignUP';
import {Toaster} from 'react-hot-toast'
import PrivateRoute from './utilities/PrivateRoute';

function App() {
  const [token, setToken] = useState(()=> JSON.parse(localStorage.getItem('token')|| null))
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <DefaultLayout token={token} setToken={setToken}>
          <Toaster/>
          <Suspense fallback={<GeneralLoading text={`LOADING...`} />}>
            
            <Routes>
              <Route exact path="/" element={<HomePage />} />
              <Route  element={<PrivateRoute token={token} />} >
              <Route path="/place-to-stay" element={<PlaceToStay />} />
              </Route>
              <Route path="/login" element={<Login token={token} setToken={setToken} />} />
              <Route path="/signup" element={<SignUP token={token} setToken={setToken} />} />
              <Route
                path="*"
                element={<GeneralLoading text="PAGE NOT FOUND" />}
              />
            </Routes>
          </Suspense>
        </DefaultLayout>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
