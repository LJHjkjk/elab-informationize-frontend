import { auth_api,user_api,mail_api,service_api } from "./api"


var config={
  'API':{
    'AUTH_API':auth_api,
    'USER_API':user_api,
    'MAIL_API':mail_api,
    'SERVICE_API':service_api,
  },

  'MAIL':{
    'MAILBOX_SINGLE_PAGE_SIZE':5,
  }
}
config['BACKEND_API_HOST'] = process.env.REACT_APP_BACKEND_API_HOST;


modifyURL(config['API'])

function modifyURL(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = config['BACKEND_API_HOST']+obj[key];
    } else if (typeof obj[key] === 'object') {
      modifyURL(obj[key]);
    }
  }
}



export default config

