import {useEffect, useState} from 'react';
import {allHotels} from '../actions/hotel';

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {

    }, [])

    return (
        <div className='container-fluid h1 p-5 text-center'>
            HOME PAGE 
        </div>
    )
}


export default  Home;