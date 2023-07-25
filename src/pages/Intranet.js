import React from 'react';
import Header from './Header';
import Marquee from 'react-fast-marquee';
import {Chat} from "@material-ui/icons";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons"
import "./intaranet.css";

const Intranet =()=>{
     
    return(

        <div className='intranetWrapper'> 
     <Header/>

     <div className='pagebody'>
        <div className='pagebodyTop'>
        <span className="rightbarfollowingname">SLT Digital Services</span>
        <span className="rightbarfollowingname11">INTRANET</span>
        </div>
        
        <div className='pagebodyBottom'>
            
        <div className="share">
       <div className="sharewrapper">
        <div className="sharetop">
        <span className="rightbarfollowingname12">Approval for Pre-Overtime Requests</span>
        <span className="rightbarfollowingname13">Please Login to the Intranet and Approve pending requests</span>
        </div>
        

        <div className="sharebottom">
        
            <button className="sharebuton">Proced</button>
           
        </div>

       </div>
    </div>

        </div>
     </div>
     <div className='pagebottom'>
     <div className='pagebottomTop'>

        <Marquee>
            <div>
            <img src="/assests/d1.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d2.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d3.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d4.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d5.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
             <div>
            <img src="/assests/d1.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d2.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d3.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d4.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            <div>
            <img src="/assests/d5.jpg" className="rightbarfollowingimage3"  alt=""/>
            </div>
            
            
            
        </Marquee>
     
     
     </div>
        <div className='pagebottomBottom'>
        <div className='pbyb'>
        <img src="/assests/location.svg" className="rightbarfollowingimage"  alt=""/>   
        <span className="rightbarfollowingname15">No:17 H.K Dharmadasa Mawatha, Colombo 02</span>
        </div>
        <div className='pbyb'>
        <img src="/assests/mail.svg" className="rightbarfollowingimage15"  alt=""/>   
        <span className="rightbarfollowingname15">info@sltds.lk</span>
        </div>
        <div className='pbyb'>
        <img src="/assests/telephone.svg" className="rightbarfollowingimage16"  alt=""/>   
        <span className="rightbarfollowingname16">0112-399-399</span>
        </div>

        
        </div>
     </div>
          
        </div>
    )


}

export default Intranet

