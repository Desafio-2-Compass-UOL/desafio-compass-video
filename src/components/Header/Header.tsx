import './Header.css'

import { NavLink } from 'react-router-dom'
import { AiFillHome } from 'react-icons/ai';
import { PiTelevisionBold } from 'react-icons/pi';
import { RiMovie2Fill } from 'react-icons/ri';
import { AiTwotoneStar } from 'react-icons/ai';

import Search from '../Search/Search';
import MyList from '../MyList/MyList';
import Avatar from '../Avatar/Avatar';

const Header = () => {
  return (
        <header>
            <nav>
            <ul>
                <li>
                    <NavLink to='/'>
                        <img src="/src/assets/compass.uol_Negativo 1.png" alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    >
                        <AiFillHome/>  <span>Início</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    >
                        <PiTelevisionBold/> <span>Séries</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    >
                        <RiMovie2Fill/> <span>Filmes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    >
                        <AiTwotoneStar/> <span>Celebridades</span>
                    </NavLink>
                </li>
            </ul>
            </nav> 
            <div className='box'>
                <div>
                    <Search />
                </div>
                <div>
                    <NavLink to='/src/pages/MyListPage.tsx'>
                        <MyList />
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/'>
                        <Avatar />
                    </NavLink>
                </div>
            </div>
        </header>
    )
}
export default Header

            
