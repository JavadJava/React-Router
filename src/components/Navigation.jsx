import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import CardContainer from './cards/CardContainer';

const Navigation = () => {
    return (
        <nav className='flex bg-orange-50 shadow-2xl p-10 justify-center'>
            <ul className='flex justify-around w-48 text-2xl'>  
                <li>
                    <Link className='hover:font-bold transition-all duration-200' to={"/"}>Home</Link>
                </li>
                <li>
                    <Link className='hover:font-bold transition-all duration-200' to={"/users"}>Users</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;