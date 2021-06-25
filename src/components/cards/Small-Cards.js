import {diffDays} from '../../actions/hotels';

const SmallCards = ({h}) => {
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
                                 for {diffDays(h.from, h.to)}
                             </span>
                         </p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default SmallCards