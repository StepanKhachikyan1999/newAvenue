import React, {useState} from 'react';
import css from './login.module.css'
import {FaEye} from 'react-icons/Fa'
import {FaEyeSlash} from 'react-icons/Fa'

const LoginComponents = () => {


    const [icon, setIcon] = useState()

    const handlerIcon = () => {
        setIcon(!icon)
    }

    return (
        <div className={css.loginMain}>

           <div className={css.loginOne}>

               <div className={css.login1}>

                   <div className={css.logintext}>
                       <h1>Log in</h1>
                       <h3>Welcom back to <span>Аvenue des Fleurs</span></h3>
                   </div>

                   <div className={css.loginInp}>
                       <input type="email" placeholder='Email'/>
                       {
                           !icon ?  <div className={css.inpIcon}>
                               <input type="password" placeholder='Password'/>
                               <span onClick={handlerIcon}><FaEye/></span>
                           </div> : <div className={css.inpIcon}>
                               <input type="text" placeholder='Password'/>
                               <span onClick={handlerIcon}><FaEyeSlash/></span>
                           </div>
                       }

                   </div>

                   <div className={css.rememberMe}>

                       <div>
                           <input type="checkbox"/>
                           <p>Remember me</p>
                       </div>

                       <div>
                           <a href="">Forget Password?</a>
                       </div>

                   </div>

                   <button>Log in</button>

                   <span className={css.loginSpan}><p>Don’t have an account?</p> <a href="">Get Started</a></span>
               </div>
           </div>

            <div className={css.loginTwo}>
                <div className={css.loginBg}>

                </div>
            </div>
        </div>
    );
};

export default LoginComponents;