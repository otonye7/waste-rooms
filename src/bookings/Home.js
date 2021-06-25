import {useEffect, useState} from 'react';
import SmallCards from '../components/cards/Small-Cards';
import {allHotels} from '../actions/hotels';

const Home = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        loadHotels()
    }, [])

    const loadHotels = async () => {
        let res = await allHotels()
        setHotels(res.data)
    }

    return (
        <>
        <div className='container-fluid h1 p-5 text-center'>
            <h1>All Hotels</h1>
        </div>

        <div className='container-fluid'>
            {
                hotels.map((h) => <SmallCards key={h._id} h={h}/>)
            }
        </div>
        </>
    )
}


export default  Home;