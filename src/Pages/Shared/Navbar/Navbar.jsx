import { CiHome } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaUserFriends, FaFacebookMessenger  } from "react-icons/fa";
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100 flex justify-center">
        
        <div className="navbar flex">
          <ul className="menu menu-horizontal flex justify-between px-1">
            <li className='text-2xl'>
            <Link to={"/home"} className=""><CiHome/></Link>
            </li>
            <li className='text-2xl'>
              <Link to={"home/friends"}> <FaUserFriends/></Link>
            </li>
            <li className='text-2xl'>
              <Link to={"home/message"}> <FaFacebookMessenger/></Link>
            </li>
            <li className='text-2xl'>
              <Link to={"home/notification"}> <IoMdNotificationsOutline/></Link>
            </li>
            <li>
            <div className="avatar">
    <div className="w-6">
      <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
    </div>
  </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
