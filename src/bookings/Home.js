// import {useSelector} from 'react-redux';
// import { connect } from 'react-redux';
// import { selectUser} from '../redux/user/user.selector';
// import { createStructuredSelector } from 'reselect';

const Home = () => {

    // const {auth} = useSelector((state) => ({...state}))
    return (
        <div className='container-fluid h1 p-5 text-center'>
            HOME PAGE 
        </div>
    )
}

// const mapStateToProps = createStructuredSelector({
//     users: selectUser
// })

// export default connect(mapStateToProps)(Home);
export default  Home;