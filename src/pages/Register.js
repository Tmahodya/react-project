
import React from 'react';
import './register.css';




export default function Register(){
     
   

    return(
        <div className="addEmployee">
        
        <h1 className="empoyeeTitle">Easy Alert</h1>
        <form className="employeeForm" >
            <div className="employeeFormItem">
                <label>Company Name</label>
                <input type="text"  required placeholder=""
                
                  />
            </div>
            <div className="employeeFormItem">
                <label>Address 1</label>
                <input type="text" placeholder=""
                />
            </div>
            <div className="employeeFormItem">
                <label>Address 2</label>
                <input type="text" placeholder=""
                 />
            </div>
            <div className="employeeFormItem">
                <label>Address 3</label>
                <input type="text" required placeholder=""
                 />
            </div>
            
            <div className="employeeFormItem">
                <label>City</label>
                <input type="e-mail" required placeholder=""
                 />
            </div>
            <div className="employeeFormItem">
                <label>District</label>
                <input type="text"  required placeholder=""
                
                  />
            </div>
            <div className="employeeFormItem">
                <label>Hotline</label>
                <input type="text" placeholder=""
                />
            </div>
            <div className="employeeFormItem">
                <label>Age</label>
                <input type="text" placeholder=""
                 />
            </div>
            <div className="employeeFormItem">
                <label>NIC</label>
                <input type="text" required placeholder=""
                 />
            </div>
            
            <div className="employeeFormItem">
                <label>SMS Number</label>
                <input type="e-mail" required placeholder=""
                 />
            </div>
            <div className="employeeFormItem">
                <label>e-mail</label>
                <input type="text" placeholder=""
                />
            </div>
            <div className="employeeFormItem">
                <label>Facebook</label>
                <input type="text" placeholder=""
                 />
            </div>
            <div className="employeeFormItem">
                <label>twitter</label>
                <input type="text" placeholder=""
                />
            </div>
           
            <div className="employeeFormItem">
                <label>linkdine</label>
                <input type="text" placeholder=""
                 />
            </div>
            <div className="employeeFormItem">
                <label>Company Logo</label>
                <input type="image"required placeholder=""
                      />
            </div>
            <div className="employeeFormItem">
                <label>Business Type</label>
                <input type="text" placeholder=""
                 />
            </div>

            <div className='av'>
            <button className="employeeButton">Cancle</button>
            <button className="employeeButton">Save</button>

            </div>
            
         
        </form>
    </div>


        
    )
}


