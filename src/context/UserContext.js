import React, { createContext, useContext, useEffect,useState } from 'react';
import config from '../config/index'
import { compact } from 'lodash';

class UserInfo{
  constructor() {
      this.id=null
      this.name=null
      this.avatar= null
      this.email=null
      this.phone=null
      this.award_winning_experience=null
      this.project_experience=null
      this.osition=null
      this.department=null
      
      this.gender=null
      this.college=null
      this.major=null
      this.classname=null
      this.time_of_enrollment=null
      this.join_date=null
      this.native_place=null
      this.photograph=null
      this.reason_for_application=null

      this.isLogined=false
      this.loginMessage='未登录，请登录'
  }
}

// 用户管理类
class UserManager {
  constructor( state= null,callbackFunction = null) {
    this.state=state
    this.callbackFunction=callbackFunction
  }

  async init(){
    //验证是否登陆
    try {
      const validate_response = await fetch(config['API']['AUTH_API']['validate-login'],{
                  credentials: 'include',
                  method:'GET'
                })
      const validate_result = await validate_response.json()
      
      if (validate_result.result=='ok'){
        //请求用户信息
        const user_response=await fetch(config['API']['USER_API']['get_user_info']+`?user_id=${validate_result.user_id}`,{
          credentials: 'include',
          headers:{id:validate_result.user_id},
          method:'GET',
        })
        const user_result=await user_response.json()

        if(user_result.result=='ok'){
          //设置用户信息
          this.setUserInfo({
            id:user_result.message.id,
            name:user_result.message.name,
            avatar:user_result.message.avatar,
            email:user_result.message.email,
            phone:user_result.message.phone,
            award_winning_experience:user_result.message.award_winning_experience,
            project_experience:user_result.message.project_experience,
            position:user_result.message.position,
            department:user_result.message.department,
            
            gender:user_result.message.gender,
            college:user_result.message.college,
            major:user_result.message.major,
            classname:user_result.message.classname,
            time_of_enrollment:user_result.message.time_of_enrollment,
            join_date:user_result.message.join_date,
            native_place:user_result.message.native_place,
            photograph:user_result.message.photograph,
            reason_for_application:user_result.message.reason_for_application,

            isLogined: true,
            loginMessage: '登陆成功',
          })
        }
      }else{
        this.setUserInfo({login_message:validate_result.message})
      }
    } catch (error) {
      this.setUserInfo({login_message:error})
    }  
  }
  setUserInfo(newState){
    var newUserInfo={...this.state}
    for (var i in newState){
      newUserInfo[i]=newState[i]
    }
    this.callbackFunction(newUserInfo)
  }

  updateUserInfo(){
    this.init()
  }
}

// 创建用户上下文
const UserContext = createContext();


// 创建提供者组件
function UserProvider({ children }){
  // 创建用户管理类的实例
  const [state, setUserInfo] = useState(new UserInfo());
  const userManager = new UserManager(state,setUserInfo);
  useEffect(()=>{
    userManager.init()
  },[])

  return <UserContext.Provider value={[userManager,state]}>{children}</UserContext.Provider>;
};



// 创建自定义 hook 以使用用户上下文
function useUserContext(){
  const [userManger,state] = useContext(UserContext);
  return [userManger,state]
};

export { UserProvider, useUserContext };