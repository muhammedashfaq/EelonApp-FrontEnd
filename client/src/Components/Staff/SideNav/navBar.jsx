import {useState} from 'react';
import logo from '../../../assets/EelonLogo.png';
import {Avatar, Drawer} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import useLogout from '../../../Hooks/useLogout';
import menu from './menuLinks.jsx';

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});
  const logOut = useLogout();
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleSubmenu = index =>
    setSubmenuOpen(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));

  return (
    <div>
      <FontAwesomeIcon icon={faBars} onClick={openDrawer} size='xl' className='cursor-pointer bg-blue-gray-400 px-6 py-3 rounded-lg text-white' />

      <Drawer open={open} onClose={closeDrawer} className='p-4 bg-dark-purple overflow-y-auto'>
        <div className='h-screen'>
          <div className='flex items-center  p-3 rounded-lg shadow-inner bg-blue-800'>
            <Avatar src='https://docs.material-tailwind.com/img/face-2.jpg' alt='avatar' size='xs' />
            <span className='text-white ml-2 text-sm font-medium'>Username</span>
          </div>

          <div className='mt-4 mb-2'>
            <input type='search' placeholder='Search...' className='px-4 py-2 rounded-lg w-full bg-gray-500 text-white outline-none' />
          </div>

          <ul className='pt-2'>
            {menu.map((item, index) => (
              <li
                className={`text-gray-200 text-sm flex flex-col cursor-pointer p-2 hover:bg-deep-orange-500 rounded-md mt-2 relative`}
                key={index}
                onClick={() => toggleSubmenu(index)}
              >
                <Link to={item.href}>
                  <div className='flex items-center gap-x-4'>
                    <FontAwesomeIcon icon={item.icon} />

                    <span className={`duration-200 flex-1 ${!open && 'hidden '} text-base font-medium`}>{item.title}</span>

                    {item.submenuItems && <span className='material-symbols-outlined'>{submenuOpen[index] ? 'expand_less' : 'expand_more'}</span>}
                  </div>
                </Link>
                {item.submenuItems && submenuOpen[index] && (
                  <ul className=' bg-deep-orange-500 rounded-xl'>
                    {item.submenuItems.map((subitems, i) => (
                      <Link to={subitems.href} key={i}>
                        <li className={` text-sm flex items-center gap-x-8 cursor-pointer px-2 py-1.5 hover:bg-blue-500 rounded-lg text-white `}>
                          <FontAwesomeIcon icon={subitems.icon} />
                          <span>{subitems.title}</span>
                        </li>
                      </Link>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <li className={`text-gray-200 text-sm flex flex-col cursor-pointer p-2 hover:bg-deep-orange-500 rounded-md mt-2 relative`}>
            <div className='flex items-center gap-x-4' onClick={logOut}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              <span className={`duration-200 flex-1 text-base font-medium`}>Logout</span>
            </div>
          </li>
          {/* <li
            className={` text-sm flex items-stretch gap-x-8 cursor-pointer  fixed w-max m-3 p-6 bg-blue-500 rounded-lg text-white mt-4`}
          >
            <img src={logo} alt="Logo" className="w-8 h-8" />
            <span className="ml-2 text-base font-medium">Eelon.com </span>
          </li> */}
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;
