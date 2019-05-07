DOTA2数据查询系统，[模仿页面链接]https://www.opendota.com/

所使用API由[OPENDOTA](https://docs.opendota.com/)提供。

移动端会在后续添加进来。

技术栈 antd + react router + react + react responsive + create-react-app。

为了解决免费接口的限流问题，加入了离线数据包。可以在代码中选择开关离线模式。（后续会加入一键离线模式）

目前使用的免费版接口存在限流，刷新过快会导致TypeError: Cannot read property 'profile' of undefined问题。

### `启动方法`

npm install 安装需要的框架

npm start 以开发模式启动app

