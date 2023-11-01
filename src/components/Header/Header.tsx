import './Header.css'

import { NavLink } from 'react-router-dom'
import { BiSearch } from 'react-icons/bi'
import { AiFillHome } from 'react-icons/ai';
import { PiTelevisionBold } from 'react-icons/pi';
import { RiMovie2Fill } from 'react-icons/ri';
import { AiTwotoneStar, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';


const Header = () => {
  return (
    <div className='header'>
        <div>
            <img src="/src/assets/compass.uol_Negativo 1.png" alt="" />
        </div>
        <nav className='navbar'>
            <NavLink to='/'>
                <AiFillHome />Início
            </NavLink>
            <NavLink to='/'>
                <PiTelevisionBold /> Séries
            </NavLink>
            <NavLink to='/'>
                <RiMovie2Fill /> Filmes
            </NavLink>
            <NavLink to='/'>
                <AiTwotoneStar /> Celebridades
            </NavLink>
            <div>
                <form>
                    <input type="text" placeholder="Filmes, série ou celebridade" />
                    <button> <BiSearch /> </button>
                    <button> <AiOutlineClose /> </button>
                </form>
            </div>
            <NavLink to='/'>
                <AiOutlinePlus />Minha lista
            </NavLink>
        </nav>
    </div>
    )
}

export default Header