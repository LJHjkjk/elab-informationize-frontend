//包含一些登陆组件


import  { useEffect,useState } from 'react';
import { useUserContext } from '../context/UserContext';


function RequireLogin({logined,notlogin}){
    const { user, logout } = useUserContext();

    // 使用 useState 钩子追踪用户的登陆状态
    const [isLoggedIn, setIsLoggedIn] = useState(user.login_state.is_logined);
  
    // 当用户信息发生变化时更新状态
    useEffect(() => {
      setIsLoggedIn(user.login_state.is_logined);
    }, [user.login_state.is_logined]);



    return (
        <div className="require-login">
            {isLoggedIn?logined:notlogin}
        </div>
    )
}

export {RequireLogin};





