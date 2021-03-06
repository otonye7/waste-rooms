import {useState, useEffect} from 'react';
import DashboardNav from '../components/DashboardNav';
import ConnectNav from '../components/ConnectNav';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {HomeOutlined} from '@ant-design/icons';
import {createConnectAccount} from '../actions/stripe';
import {sellerHotels} from '../actions/hotels';
import SmallCards from '../components/cards/Small-Cards';

const DashBoardSeller = () => {
    const {auth} = useSelector((state) => ({...state}))
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadSellersHotels()
    }, [])

    const loadSellersHotels = async () => {
        let res = await sellerHotels(auth.token)
        setHotels(res.data)
    }

    const handleClick = async () => {
        setLoading(true);
       try {
           let res = await createConnectAccount(auth.token) 
           console.log(res);
           window.location.href = res.data
       } catch (err) {
           console.log(err)
           setLoading(false)
       }
    }

    const connected = () => (
        
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-10'>
                <h2>Your Hotels</h2>
            </div>
            <div className='col-md-2'>
                <Link to='/hotels/new' className='btn btn-primary'>+ Add New</Link>
            </div>
        </div>
        <div className='row'>
            {
                hotels.map((h) => <SmallCards key={h._id} h={h} showViewMoreButtom={false} owner={true}/>)
            }
        </div>
     </div>
    )

    const notConnected = () => (
        <div className='container-fluid'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 text-center'>
                <div className='p-5 pointer'>
                    <HomeOutlined className='h1'/>
                    <h4>Setup payout to post hotel rooms </h4>
                    <p className='lead'>MERN partner with stripe to transfer earnings to your bank accounts</p>
                     <button disabled={loading} onClick={handleClick} className='btn btn-primary mb-3'>{loading ? 'Processing' : 'Setup Payouts'}</button>
                     <p className='text-muted'><small>You will be redirected to stripe to complete the on boarding process</small></p>
                </div>
            </div>
        </div>
     </div>
    )
   
    return (
        <>
          <div className='container-fluid bg-secondary p-5'>
              <ConnectNav />
          </div>
           
          <div className='container-fluid p-4'>
              <DashboardNav />
          </div>
          
        {
          auth &&
           auth.user &&
           auth.user.stripe_seller &&
          auth.user.stripe_seller.charges_enabled ?
          connected() : notConnected()
         }
          {/* <pre>{JSON.stringify(auth, null, 4)}</pre> */}
        </>
    )
}

export default DashBoardSeller;