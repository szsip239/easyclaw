我想设计一个现代化的网页,来指导用户安装openclaw
网页上有一些中国电信天翼云的元素,底部是园区电信支持团队

分为几个板块
1\领取天翼云电脑免费领取1个月和2500万token
扫二维码(见项目下的文件 领取云电脑.jpg)

2\自己动手一步步装虾
https://waytoagi.feishu.cn/wiki/PchGw7xkzikprvk26gLctxJ2nBc
提醒用户如果把龙虾装在自己的主用或者公司电脑有一定的安全风险,推荐用户在领取的天翼云电脑上安装(跳转到第三步)
基于这篇文章的内容,可以按照mac用户和windows用户区分两个子入口.将配置等其他内容删除

3\通过程序自动装虾
可以在自己电脑上装,但推荐在刚领取的天翼云电脑上装,这样更安全,在云电脑上装之前,提醒用户先获取免费赠送的token(在第4步)
使用https://oneclaw.cn/ 提供的安装程序,直接在我的页面上根据不同系统提供下载(使用https://oneclaw.cn上的下载地址)
装的是最新版本龙虾
装完后,提示用户配置api,见文件夹下的image.png
如果使用天翼云云电脑赠送的token
接口地址baseUrl:  "https://yilian.ctyun.cn/api/v3", 模型id: "ep-20260131221655-t48nr",api密钥就是第4步保存好的key
如果使用天翼云息壤赠送的token
接口地址baseUrl:  "https://wishub-x6.ctyun.cn/v1", 模型id和api密钥根据第4步息壤的笔记来,建议选择glm5或者doubao2.0


4\免费获得天翼云token
免费2500万token之一:天翼云电脑自带的token
先不要通过程序安装最新版本龙虾,先点击云电脑桌面的“openclaw进入应用”,点击“配置”,点击右下角“原始”
把apikey复制保存好,然后开始装龙虾     
例如以下这样: "apiKey":"ZDEyMGY4YTQtMjZiMi00MGQ3LWEzYWQtNTlhOThlODUxMmI1OuaJrOW3njFiNA=="                                      

免费2500万tonen之二:天翼云息壤,见下面这篇笔记
【金山文档 | WPS云文档】 ctyun正规大模型API，速薅！！！
https://www.kdocs.cn/l/cpTaVsNkpouo

5\配置飞书
参考文档:https://bytedance.larkoffice.com/docx/MFK7dDFLFoVlOGxWCv5cTXKmnMh
我们的页面上显示关键点,主要点是几个安装命令(区分不同系统)
以及windows用户看不到二维码,需要先安装Cmder

6\配置及使用龙虾
留空