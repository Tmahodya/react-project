import React from 'react';

import "./header.css";



const Header =()=>{

   return(
        
      <div className='header'>
        <div className='headerWrapper'>
         <div className='headerLeft'>
         <img src="/assests/slt1.png" className="rightbarfollowingimage1"  alt=""/>
         </div>
         <div className='headerRight'>
         <img src="/assests/fb1.png" className="rightbarfollowingimage"  alt=""/>
         <img src="/assests/tw1.png" className="rightbarfollowingimage"  alt=""/>
         <img src="/assests/ld1.png" className="rightbarfollowingimage"  alt=""/>

         </div>
        </div>
             
  </div>
    )


}

export default Header