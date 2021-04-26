// import {useSelector} from 'react-redux';
import {useState} from 'react';
import AlgoliaPlaces from 'algolia-places-react';
import {DatePicker, Select} from 'antd';
import moment from 'moment';


const {Option} = Select;

const config = {
    appId : process.env.REACT_APP_ALGOLIA_APP_ID,
    apiKey : process.env.REACT_APP_ALGOLIA_API_KEY,
    language: "en",
    countries: ["ng"]
}


const NewHotels = () => {
    const [value, setValues] = useState({
        title: '',
        content: '',
        location: '',
        image: '',
        price: '',
        from: '',
        to: '',
        bed: ''
    })
    const {title, content, location, image, price, from, to, bed} = value;

    const [preview, setPreview] = useState('https://via.placeholder.com/100x100.png?text=PREVIEW')

    const handleSubmit = (e) => {

    }

    const handleImageChange = (e) => {
        // console.log(e.target.files[0])
        setPreview(URL.createObjectURL(e.target.files[0]))
        setValues({...value, image: e.target.files[0]})
    }

    const handleChange = (e) => {
        setValues({...value, [e.target.name]: e.target.value})
    }
    
    const hotelForm = () => (
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label className='btn btn-outline-secondary btn-block m-2 text-left'>
                    Image
                    <input type='file' name='image' onChange={handleImageChange} accept='image/*' hidden/>
                </label>

                <input type='text' name='title' onChange={handleChange} placeholder='Title' className='form-control m-2' value={title}/>
                <textarea  name='content' onChange={handleChange} placeholder='Content' className='form-control m-2' value={content}/>
                <AlgoliaPlaces className='form-control ml-2 mr-2' placeholder='location' defaultValue={location} options={config} onChange={({suggestion}) => setValues({...value, location: suggestion.value})} style={{height: '50px'}}/>
                <input type='number' name='price' onChange={handleChange} placeholder='Price' className='form-control m-2' value={price}/>
                {/* <input type='number' name='bed' onChange={handleChange} placeholder='Number of beds' className='form-control m-2' value={bed}/> */}
                <Select onChange={(value) => setValues({...value, bed: value})} className='w-100 m-2' size='large' placeholder='Number of beds'>
                    <Option key={1}>{1}</Option>
                    <Option key={2}>{2}</Option>
                    <Option key={3}>{3}</Option>
                    <Option key={4}>{4}</Option>
                </Select>
            </div>

            <DatePicker
             placeholder='From date'
             className='form-control m-2'
             onChange={(date, dateString) => setValues({...value, from: dateString})}
             disabledDate={(current) => current && current.valueOf() < moment().subtract(1, 'days')}
             />
            
            <DatePicker
             placeholder='To date'
             className='form-control m-2'
             onChange={(date, dateString) => setValues({...value, to: dateString})}
             disabledDate={(current) => current && current.valueOf() < moment().subtract(1, 'days')}
             />

            <button className='btn btn-outline-primary m-2'>Save</button>
        </form>
    )

    return (
       <>
         <div className='container-fluid bg-secondary p-5 text-center'>
             <h2> Hotel New</h2>
        </div>

        <div className='container-fluid'>
            <div className='row'>
                <div className='col-md-10'>
                    <br />
                    {hotelForm()}
                </div>

                <div className='col-md-2'>
                    <img src={preview} alt="preview_image" className='img img-fluid m-2'/>
                    <pre>{JSON.stringify(value, null, 4)}</pre>
                </div>
            </div>
        </div>
       </>
    )
}

export default NewHotels;