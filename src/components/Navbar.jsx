import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../auth/AuthProvider';
import nlogo from "../assets/img/navlogo.png"

const Navbar = () => {
  const { user, logOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className='navbar bg-[#E21C6F] text-white text-lg shadow-sm sticky top-0 z-10 items-center'>
      <div className='container mx-auto px-4 flex items-center justify-between'>
        {/* Logo */}
        <Link to='/' className='flex gap-2 items-center'>
          <img className='w-24 object-cover h-14 text-white' src={nlogo} alt="" /> 
        </Link>

        {/* Hamburger Menu */}
        <button
          className='md:hidden text-white focus:outline-none'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex items-center space-x-4 md:space-x-8`}
        >
          <ul className='flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0'>
            <li>
              <Link
                to='/'
                className={`hover:text-gray-200 ${
                  isActive('/') ? 'border-b-2 border-white' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='/addartical'
                className={`hover:text-gray-200 ${
                  isActive('/addartical') ? 'border-b-2 border-white' : ''
                }`}
              >
                Add Artical
              </Link>
            </li>
            
              <li>
                <Link
                  to='/allartical'
                  className={`hover:text-gray-200 ${
                    isActive('/allartical') ? 'border-b-2 border-white' : ''
                  }`}
                >
                  All Artical
                </Link>
              </li>
            
            
              <li>
                <Link
                  to='/dashboard'
                  className={`hover:text-gray-200 ${
                    isActive('/dashboard') ? 'border-b-2 border-white' : ''
                  }`}
                >
                  Dashboard
                </Link>
              </li>
            
           
              <li>
                <Link
                  to='/myartical'
                  className={`hover:text-gray-200 ${
                    isActive('/myartical') ? 'border-b-2 border-white' : ''
                  }`}
                >
                 My Artical
                </Link>
              </li>
              <li>
                <Link
                  to='/subscription'
                  className={`hover:text-gray-200 ${
                    isActive('/subscription') ? 'border-b-2 border-white' : ''
                  }`}
                >
                 Subscription
                </Link>
              </li>

              <li>
                <Link
                  to='/premium'
                  className={`hover:text-gray-200 ${
                    isActive('/premium') ? 'border-b-2 border-white' : ''
                  }`}
                >
                 Premium Artical
                </Link>
              </li>
           
            {!user ? (
              <li>
                <Link
                  to='/login'
                  className={`hover:text-gray-200 ${
                    isActive('/login') ? 'border-b-2 border-white' : ''
                  }`}
                >
                  Login
                </Link>
              </li>
            ) : (
              <li className='flex items-center'>
                <img
                  referrerPolicy='no-referrer'
                  alt='User Profile'
                  src={user?.photoURL}
                  className='w-10 h-10 rounded-full'
                />
                <button
                  onClick={logOutUser}
                  className='border text-white py-1 px-4 rounded ml-2'
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  ); 
};

export default Navbar;
