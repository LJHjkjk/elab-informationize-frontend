const auth_api={
  'login':'/api/auth/login',
  'validate-login':'/api/auth/validate-login',
}
  

const user_api={
  'get_user_info':'/api/user',
  'modify_user_info':'/api/user',
}


const mail_api={
  'send_mail':'/api/mail',
  'sendable_object':'/api/mail/sendable-objects',
  'get_mailbox':'/api/mail/mailbox',
  'get_mail_details':'/api/mail',
}

const service_api={
  'material_manage':{
    'get_materials':'/api/service/material',
    'add_material':'/api/service/material',
    'delete_material':'/api/service/material',
    'modify_material':'/api/service/material',
    'checkin_material':'/api/service/material/checkin',
    'checkout_material':'/api/service/material/checkout',
  }
}

export {user_api,auth_api,mail_api,service_api}