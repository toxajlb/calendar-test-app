import { Routes, Route, Navigate} from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import Login from "../pages/Login";
import Event from "../pages/Event";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter = () => {
  const { isAuth } = useTypedSelector(state => state.auth);
  return (
    isAuth
    ?
    <Routes>
      <Route key={privateRoutes.path} path={privateRoutes.path} element={<Event />}/>  
      <Route path='*' element={<Navigate to={privateRoutes.path}/>} />
    </Routes>
    :
    <Routes>
      <Route key={publicRoutes.path} path={publicRoutes.path} element={<Login />}/>  
      <Route path='*' element={<Navigate to={publicRoutes.path}/>} />
    </Routes>
  )
}

export default AppRouter;
