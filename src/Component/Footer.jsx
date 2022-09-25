import React from 'react'
import Logo from './241513285_4254592044636278_6228006272036394703_n.png'
import '../ComponentStyle/Footer.css'
export default function Footer() {
  return (
    <>
      <div className='m-0 mt-5 row footer position-relative bottom-0 w-100'  >
        <div className='img col-md-4' >
          <a href='https://www.facebook.com/Routelearning' >
          <img className='w-50' src={Logo} />
          </a>
        </div>
        <div className=' Instractors  col-md-4  d-flex flex-column justify-content-center align-items-start' >
          <h4>Instractors</h4>
          <a href='https://www.facebook.com/groups/1983892408554060/user/100002064531585/'>
          <i className="fab mx-2 fa-facebook mt-3  "> Ahmed Bhnasy </i>  
          </a>
          <a href='https://www.facebook.com/groups/1983892408554060/user/100003669635088'>
          <i className="fab mx-2 fa-facebook mt-3  "> Aya Ali </i>  
          </a>
          <a href='https://www.facebook.com/groups/1983892408554060/user/100001228015833'>
          <i className="fab mx-2 fa-facebook mt-3  "> Nadia Mohamed </i>  
          </a>
        </div>
        <div className='col-md-4 d-flex flex-column justify-content-center align-items-center' >
          <h4 className='text-capitalize' >by student</h4>
          <a href='https://www.facebook.com/profile.php?id=100007720298573' className='Student' >
            <i className="fab mx-2 fa-facebook mt-3  "> El-Khawaga </i>  
          </a>
        </div>

      </div>
    </>
  )
}
