//包含一些登陆组件


import  { useEffect,useState } from 'react';
import { useUserContext } from '../context/UserContext';


function RequireLogin({logined,notlogin}){
    const [userManager,state]= useUserContext();
    // const [isLogined,setIsLogined]=

    return (
        <div className="require-login">
            {state.isLogined?logined:notlogin}
        </div>
    )
}

export {RequireLogin};





