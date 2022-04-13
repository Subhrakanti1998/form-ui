import React, { Component } from 'react';
import './Formcss.css';
import Img from './download.jpg'

export class Form extends Component {
  render() {
    return (
        <body>
            
            
          <div className='contener'>
         
          {/* <h3>Sign Up</h3> */}
            <img src={Img}  alt=''></img>
            {/* <div className='Sign'><h3>Sign Up</h3></div> */}
          
           
          <div className='alldetails'>
          
         
             
              
             <form>
                      <div className='details' id="fname">
                          <span className='input'>First Name</span>
                          <input type='text' ></input>

                      </div>

                      <div className='details' id="lname">
                          <span className='input'>Last Name</span>
                          <input type='text' ></input>

                      </div>
                      <div className='details' id="email">
                          <span className='input'>Email</span>
                          <input type='text' ></input>

                      </div>

                      <div className='details'>
                          <span className='input' id="detail">Phone Number</span>
                          <input type='text' ></input>

                      </div>
                      <div className='details' id="sign">
                          <button id="button"> sign up </button>

                      </div>
                  
              </form>
              </div> 
              {/* <h1>Sign Up</h1>      */}
              </div>
              
              
          
        </body>
        
      
    )
  }
}

export default Form
