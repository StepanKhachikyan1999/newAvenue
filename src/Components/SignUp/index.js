import React, {useState} from 'react';
import css from './signUp.module.css';
import {FaEye, FaEyeSlash} from "react-icons/fa";

const SignUpContainers = () => {
    const [icon, setIcon] = useState()

    const handlerIcon = () => {
        setIcon(!icon)
    }

    return (
        <div className={css.loginMain}>

            <div className={css.loginOne}>

                <div className={css.login1}>

                    <div className={css.logintext}>
                        <h1>Sign up</h1>
                        <h3>Hello!!!</h3>
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


                    <button>Log in</button>

                    <span className={css.loginSpan}><p>Already have an account?</p> <a href="">Log in</a></span>
                </div>
            </div>

            <div className={css.loginTwo}>
                <div className={css.loginBg}>

                </div>
            </div>
        </div>
    );
};

export default SignUpContainers;