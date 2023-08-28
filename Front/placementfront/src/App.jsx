import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';

import Home from './pages/Home';
import Header from './layouts/Header';
import Login from './pages/login';
import SignUp from './pages/signup';
import GetStudent from './pages/student/getstudent';
import GetInterview from './pages/student/getInterview';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Header />}>
      <Route index element={<Home />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/signup' element={<SignUp />} />
      <Route path='/student' element={<GetStudent />} />
      <Route path='/interview' element={<GetInterview />} />
    </Route>
  )
);

function App() {

  return (
    <>
      <RouterProvider router = {router} />
    </>
  )
}

export default App
