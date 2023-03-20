import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Card = (props) => {

    const data = props.dataa

    return (
        <li className='flex border-2 flex-col w-[12%] items-center p-4 rounded-2xl shadow-2xl'>
            <img src={data.avatar} alt="" className='w-full rounded-2xl' />
            <p className='text-[12px] mt-3'>{data.email}</p>
            <Link to= {`/users/${data.id}`} className='mt-3 cursor-pointer'>{data.first_name+ " " +data.last_name}</Link>
        </li>
    );
};

export default Card;