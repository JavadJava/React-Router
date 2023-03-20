import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

const SingleCard = () => {
    const  params =  (useParams()).userId

    const [card, setCard] = useState([])

    const fetchData = async () => {
        const any = (await axios.get(`https://reqres.in/api/users/${params}`)).data.data
        setCard(any)
    }

    useEffect(() => {
        fetchData()
        console.log(card);
      }, [card])  
    return (
        <div>
            <div className='flex border-2 flex-col w-[12%] items-center p-4 rounded-2xl shadow-2xl'>
                <img src={card.avatar} alt="" className='w-full rounded-2xl' />
                <p className='text-[12px] mt-3'>{card.email}</p>
                <p className='mt-3 cursor-pointer'>{card.first_name+ " " + card.last_name}</p>
            </div>
        </div>
    );
};

export default SingleCard;