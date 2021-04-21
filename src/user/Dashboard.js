import DashboardNav from '../components/DashboardNav';

const DashBoard = () => {
   
    return (
        <>
          <div className='container-fluid bg-secondary p-5'>
              <h1>Dashboard</h1>
          </div>
           
          <div className='container-fluid p-4'>
              <DashboardNav />
          </div>

          <div className='container'>
              <p>Show all booking and a button to browse hotels</p>
          </div>
        </>
    )
}

export default DashBoard;