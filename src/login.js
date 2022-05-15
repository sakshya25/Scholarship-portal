import React from 'react'
// import { Link } from 'react-router-dom'
import './login.css'
export default function login() {
    return (
        <>
            
                <div className='container-2'>
                    <div className='header'>
                        <h1 className='title'>Login </h1>
                    </div>
                    <form action="">
                        <div className='id'>
                            <h3><label htmlFor='email'></label>Email</h3>
                            <div>
                                <i className='far fa-user'><input type="email" autocomplete="off" id='email' placeholder='Enter userId' name='email' /></i>
                            </div>
                            <div className="id">
                                <h3> <label htmlFor="password">Password</label></h3>

                                <div>  <i className="fas fa-unlock">   <input type="password" autoComplete='off' id='password' placeholder='Enter password'/></i>
                                </div>
                            </div>
                            <div className="captcha">
                                <div class="g-recaptcha" data-sitekey="6LeByEEeAAAAAM3tmyjk4PuD9QKHcyzrCfzhtCHx"></div>
                                <div className="submit1">
                                    <div className="login">

                                        {/* <input type="submit" value='Login' /> */}
                                        <button type="submit" >Login</button>
                                    </div>
                                    <div className="submit2">
                                        <div className="login">

                                            {/* <input type="submit" value='Login' /> */}
                                            <button type="submit" >Register</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            
        </>
    )
}
