import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Card from './Card';
import { Route,Routes } from 'react-router-dom';
import Navigation from '../Navigation';
const CardContainer = () => {
    const [card, setCard] = useState([])
    const fetchData = async () => {
        const any = (await axios.get('https://reqres.in/api/users')).data.data
        setCard(any)
    }
    useEffect(() => {
      fetchData()
      console.log(card);
    }, [card])

    return (
    
            <ul className='flex flex-wrap justify-around p-12'>
                {card.map((card,index) => (
                    <Card key={card + index} dataa ={card}/>
                    ))}
            </ul>
    );
};

export default CardContainer;