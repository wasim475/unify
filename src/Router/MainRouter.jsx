import { Route, Routes } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Friend from "../component/Friend/Friend";
import Message from "../component/Message/Message";
import Notification from "../component/Notification/Notification";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="friends" element={<Friend />} />
          <Route path="message" element={<Message />} />
          <Route path="notification" element={<Notification />} />
        </Route>
      </Routes>
    </>
  );
};

export default MainRouter;
