// import {useSelector} from 'react-redux';
import {useState} from 'react';
import {createHotel} from '../actions/hotels';
import {useSelector} from 'react-redux';
import HotelCreateForm from '../components/form/HotelCreateForm';



const NewHotels = () => {
    const {auth} = useSelector((state) => ({...state}));
    const {token} = auth
    const [value, setValues] = useState({
        title: '',
        content: '',
        image: '',
        price: '',
        from: '',
        to: '',
        bed: ''
    })
    const {title, content, image, price, from, to} = value;

    const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW');

    const [location, setLocation] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        let hotelData = new FormData()
        hotelData.append('title', title)
        hotelData.append('content', content)
        hotelData.append('location', location)
        hotelData.append('price', price)
        image && hotelData.append('image', image)
        hotelData.append('from', from)
        hotelData.append('to', to)

        console.log([...hotelData])

       try {
        let res = await createHotel(token, hotelData)
        console.log(res)
        setTimeout(() => {
            window.location.reload()
        }, 1000)
       } catch (err) {
           console.log(err)
           alert("Image failed to save");
       }
    }

    const handleImageChange = (e) => {
        // console.log(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
        setValues({...value, image: e.target.files[0]})
    }

    const handleChange = (e) => {
        setValues({...value, [e.target.name]: e.target.value})
    }
   
    return (
       <>
         <div className='container-fluid bg-secondary p-5 text-center'>
             <h2> Hotel New</h2>
        </div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-10'>
                    <br />
                   <HotelCreateForm 
                   value={value}
                   setValues={setValues}
                   handleChange={handleChange}
                   handleImage={handleImageChange}
                   handleSubmit={handleSubmit}
                   location={location}
                   setLocation={setLocation}
                   />
                </div>

                <div className='col-md-2'>
                    <img src={preview} alt="preview_image" className='img img-fluid m-2'/>
                    <pre>{JSON.stringify(value, null, 4)}</pre>
                    {JSON.stringify(location)}
                </div>
            </div>
        </div>
       </>
    )
}

export default NewHotels;