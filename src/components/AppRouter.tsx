import { Routes, Route, Navigate} from "react-router-dom";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";
import Login from "../pages/Login";
import Event from "../pages/Event";

const AppRouter = () => {
  const auth = true;
  return (
    auth
    ?
    <Routes>
      {privateRoutes.map(route => 
        <Route key={route.path} path={route.path} element={<Event />}/>  
      )}
      <Route path='*' element={<Navigate to={RouteNames.EVENT}/>} />
    </Routes>
    :
    <Routes>
      {publicRoutes.map(route => 
        <Route key={route.path} path={route.path} element={<Login />}/>  
      )}
      <Route path='*' element={<Navigate to={RouteNames.LOGIN}/>} />
    </Routes>
  )
}

export default AppRouter;
