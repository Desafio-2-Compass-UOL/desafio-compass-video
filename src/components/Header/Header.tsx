import './Header.css'

import { NavLink } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai';
import { PiTelevisionBold } from 'react-icons/pi';
import { RiMovie2Fill } from 'react-icons/ri';
import { AiTwotoneStar, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';


const Header = () => {
  return (
        <header>
            <div className='menu'>
            <ul>
                <li>
                    <NavLink to='/'>
                        <img src="/src/assets/compass.uol_Negativo 1.png" alt="" />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    to='/'
                    className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        <AiFillHome/>  <span>Início</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        <PiTelevisionBold/> <span>Séries</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        <RiMovie2Fill/> <span>Filmes</span>
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    className={({isActive}) => (isActive ? 'active' : '')}
                    >
                        <AiTwotoneStar/> <span>Celebridades</span>
                    </NavLink>
                </li>
            </ul>
            </div> 
            <div className='box'>
                <div className='search'>
                    <form>
                        <input type="text" placeholder="Filmes, série ou celebridade" />
                        <div>Filme</div>
                        <button> <BiSearch className='icon'/> </button>
                        <button> <AiOutlineClose className='icon'/> </button>
                        
                    </form>
                </div>
                <div>
                    <NavLink to='/'>
                        <AiOutlinePlus />
                        <span>Minha lista</span> 
                    </NavLink>
                </div>
                <div>
                    <NavLink to='/'>
                        AVATAR
                    </NavLink>
                </div>
            </div>
        </header>
    )
}
export default Header