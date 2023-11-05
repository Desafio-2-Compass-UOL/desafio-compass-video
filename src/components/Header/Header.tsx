import './Header.css'

import { NavLink } from 'react-router-dom'

import { AiFillHome } from 'react-icons/ai';
import { PiTelevisionBold } from 'react-icons/pi';
import { RiMovie2Fill } from 'react-icons/ri';
import { AiTwotoneStar } from 'react-icons/ai';

import Search from '../Search/Search';
import MyList from '../MyList/MyList';
import MenuUser from '../MenuUser/MenuUser';

const logo = <img src="/src/assets/compass.uol_Negativo 1.png" alt="Logo CompassUol" />

const Header = () => {
  return (
        <header>
            <nav>
            <ul>
                <li>
                    <NavLink to='/home'>
                        {logo}
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/home'
                    >
                        <AiFillHome/>  <span>Início</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/series'
                    >
                        <PiTelevisionBold/> <span>Séries</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/filmes'
                    >
                        <RiMovie2Fill/> <span>Filmes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/celebridades'
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
                    <NavLink to='/mylistpage'>
                        <MyList />
                    </NavLink>
                </div>
                <div>
                    <div>
                    <MenuUser />
                    </div>
                </div>
            </div>
           
        </header>
    )
}
export default Header

            
