import { auth_api,user_api } from "./api"


var config={
  'API_URL':{
      'AUTH_API':auth_api,
      'USER_API':user_api,
  }
}
config['BACKEND_API_HOST'] = process.env.REACT_APP_BACKEND_API_HOST;


for(const i in config['API_URL']){
  for(const k in config['API_URL'][i]){
    config['API_URL'][i][k]=config['BACKEND_API_HOST']+config['API_URL'][i][k]
  }
}



export default config

