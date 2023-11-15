import React, { createContext, useContext, useReducer } from 'react';
import config from '../config/index'


// 用户管理类
class UserManager {
  constructor() {
    this.info = {
      id: null,
      name: null,
      avatar_url: 'https://www.runoob.com/images/chrome_logo_32.png',
    };
    this.login_state = {
      is_logined: false,
      login_message: '未登录，请登录',
    };
  }

  async init(){
    //验证是否登陆
    try {
      const validate_response = await fetch(config['API_URL']['AUTH_API']['validate-login'])
      const validate_result = await validate_response.json()
      console.log(validate_result)
      
      if (validate_result.result=='ok'){
        this.login_state.is_logined=true
        this.login_state.login_message='已登陆'

        //请求用户信息
        const user_response=await fetch(
          config['API_URL']['USER_API']['get_user_info'].replace("${user_id}",validate_result.user_id)
          )
        const user_result=await user_response.json()
        //修改用户信息
        this.info.id=user_result.id
        this.info.name=user_result.name
        this.info.avatar_url=user_result.avatar_url
      }else{
        this.login_state.login_message=validate_result.message
      }
    } catch (error) {
      this.login_state.login_message='网络错误'
    }  
  }

  setUserInfo(newUser) {
    this.info = newUser;
  }
}

// 定义操作类型
const SET_USER = 'SET_USER';
const LOGOUT = 'LOGOUT';

// Reducer 函数
const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload, // 使用整个 action.payload 覆盖 state
      };
    case LOGOUT:
      return {
        user: {
          id: null,
          name: '',
          isLoggedIn: false,
        },
      };
    default:
      return state;
  }
};

// 创建用户上下文
const UserContext = createContext();

// 创建提供者组件
const UserProvider = ({ children }) => {
  // 创建用户管理类的实例
  const userManager = new UserManager();
  userManager.init()
  // 使用 useReducer 来管理用户状态
  const [state, dispatch] = useReducer(userReducer, userManager);

  // 提供上下文值给组件
  const contextValue = {
    user: state,
    dispatch,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

// 创建自定义 hook 以使用用户上下文
const useUserContext = () => {
  const { user, dispatch } = useContext(UserContext);

  const setUser = (newUser) => {
    dispatch({
      type: SET_USER,
      payload: newUser,
    });
  };

  const logout = () => {
    dispatch({
      type: LOGOUT,
    });
  };

  return {
    user, 
    dispatch
  };
};

export { UserProvider, useUserContext };