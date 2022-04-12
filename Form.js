import React, { Component } from 'react';
import './Formcss.css';
import Img from './download.jpg'

export class Form extends Component {
  render() {
    return (
        <body>
            
            
          <div className='contener'>
          <div className='image'><img src={Img}  alt=''></img></div>
                  {/* <div className='title'>
                  <h2>Sign up</h2>
                  </div> */}
                  <div className='form'>
              <form>
              
                  <div className='alldetails'>
                  
                 
                      
                      <div className='details'>
                          <span className='input'>First Name</span>
                          <input type='text' ></input>

                      </div>

                      <div className='details'>
                          <span className='input'>Last Name</span>
                          <input type='text' ></input>

                      </div>
                      <div className='details'>
                          <span className='input'>Email</span>
                          <input type='text' ></input>

                      </div>

                      <div className='details'>
                          <span className='input'>Phone Number</span>
                          <input type='text' ></input>

                      </div>
                      <div className='details'>
                          <button id="button"> sign up </button>

                      </div>
                  </div>
              </form>
              </div>
              
          </div>
        </body>
        
      
    )
  }
}

export default Form
