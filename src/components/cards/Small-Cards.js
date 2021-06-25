import {diffDays} from '../../actions/hotels';
import {useHistory, Link} from 'react-router-dom';
import {EditOutlined, DeleteOutlined} from '@ant-design/icons';

const SmallCards = ({h, handleHotelDelete = (f) => f}) => {
    const history = useHistory()
    return (
        <>
        <div className='card mb-3'>
            <div className='row no-gutters'>
                <div className='col-md-4'>
                    <img src='https://via.placeholder.com/900x500.png?text=MERN+BOOKING'
                     alt=""
                     className="card-image img img-fluid"
                     />
                </div>
                <div className='col-md-8'>
                    <div className='card-body'>
                        <h3 className='card-title'>{h.content}  <span className='float-right text-primary'>${h.price}</span></h3>
                         <p className='alert alert-info'>{h.location}</p>
                         <p className='card-text'>
                             <span className='float-right text-primary'>
                                 for {diffDays(h.from, h.to)} {diffDays(h.from, h.to) <= 1 ? ' day' : ' days'}
                             </span>
                         </p>
                         <p className='card-text'>Available From: {new Date(h.from).toLocaleDateString()}</p>
                         <button onClick={() => history.push(`/hotel/${h._id}`)} className='btn btn-primary'>Show More</button>
                         <div className='d-flex justify-content-between h4'>
                             <Link to={`/hotel/edit/${h._id}`}>
                                <EditOutlined className='text-warning'/>
                             </Link>
                             <DeleteOutlined onClick={() => {handleHotelDelete(h._id)}} className='text danger'/>
                         </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SmallCards