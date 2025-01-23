import { Route, Routes } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Friend from "../component/Friend/Friend";
import Message from "../component/Message/Message";
import Notification from "../component/Notification/Notification";
import Register from "../Pages/LoginRegister/Register/Register";
import Login from "../Pages/LoginRegister/Login/Login";
import MainLayout from "../RootLayout/MainLayout";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="registration" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<MainLayout />}>
            <Route path="friends" element={<Friend />} />
            <Route path="message" element={<Message />} />
            <Route path="notification" element={<Notification />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
