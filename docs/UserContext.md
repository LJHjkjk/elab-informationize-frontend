# UserContext

## 一、登陆流程

当用户点击访问主页后，js和html返回到用户的浏览器。

js首先检查cookie，如果有则，发送给api验证，如果为真，则将显示为登陆状态。如果为假则显示为未登录。若无则为，未登录。

当用户执行需要登陆的操作时，后端最后将用户重定向至前端界面，重新执行以上流程。

## 二、登陆状态

只有在前端界面响应的时候才会检测登陆状态。

一旦确认账户登陆，就会使用cookie请求用户的基本信息，将其储存为用户信息变量，供全局使用。当用户作出修改信息的决定并提交成功后会自动重新请求这些变量。这个基本信息就是用户个人中心的信息，不包含任何的敏感信息。当需要其他的信息时再获取。

因此需要为整个网站做一个登陆信息的变量储存和api。这个模块负责请求用户信息，并保存，然后其他的ui需要获取用户信息都要从这个api处获取。

## 三、用户上下文管理

根据上面的功能，现在设计一个用户上下文管理，专门用来处理用户信息。

### 1.职责范围

+ 判断用户是否登陆
+ 请求和储存用户基本数据（个人中心的非敏感数据）
+ 请求邮件信息
+ 还有用户的其他信息
+ 修改用户信息的接口，当用户信息修改时，需要在这里注册，当修改完成后，重新更新用户信息。

### 2.具体实现



