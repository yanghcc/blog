**本文为个人笔记，以及收集的一些相关的实用文章片段，验证可行。**

**VPS就不介绍了，有很多，需要大家自己准备。**

### 一. shadowsocks服务端安装

[参考来源](http://www.jianshu.com/p/42e0b03b9abe)

1. 使用Xshell登陆到VPS
2. 安装shadowsocks

依次输入以下几行命令，**每输入一行按回车执行**，如果没有报错，即为执行成功，出现确认提示的时候，输入y后，回车即可。每行命令可以复制后在Xshell里右键粘贴，回车执行。

```bash
yum install epel-release

yum update

yum install python-setuptools m2crypto supervisor

easy_install pip

pip install shadowsocks
```

3. 配置shadowsocks.json文件

上边几条命令都执行完成后，输入下面这条命令，回车执行：

```bash
vi /etc/shadowsocks.json
```

之后按i键进入编辑模式，Xshell窗口的左下角会出现 ```-- INSERT --``` 字样，然后**一次性复制**下面的内容（记得**先修改再复制**，将2333修改为想用的端口，范围 1 – 65535，mima12345改成你的密码，**记住下面的内容，配置客户端的时候会用到**；另外，下面是建了2333和6666两个账号，如果多了，可以删掉，不够可以再加。注意**逗号**，免得出错）, 在Xshell里右键，此时复制的内容应该已经粘贴到了Xshell里了。

```json
{

    "server":"0.0.0.0",

    "port_password":{

        "2333":"yang12345",

        "6666":"yang12345",
        "8888":"yang12345"

    },

    "timeout":600,

    "method":"aes-256-cfb"

}
```

完成后，按ESC键退出编辑模式，黑框的左下角 ```-- INSERT --``` 字样消失，输入```:wq```，回车执行，这时文件保存并返回。

4. 添加到进程

继续输入下面这条命令，回车执行：

```bash
vi /etc/supervisord.conf
```

之后按i键进入编辑模式，黑框的左下角会出现 ```-- INSERT --``` 字样，用方向键将光标移动到文件尾部空行处。然后一次性复制下面的内容，在Xshell里右键，此时复制的内容应该已经粘贴到了Xshell里了。

```bash
[program:shadowsocks]

command=ssserver -c /etc/shadowsocks.json

autostart=true

autorestart=true

user=root

log_stderr=true

logfile=/var/log/shadowsocks.log

```



完成后，按```ESC键```退出编辑模式，黑框的左下角``` -- INSERT --``` 字样消失，输入```:wq```，回车执行，这时文件保存并返回。

5. 设置开机启动

继续输入下面这条命令，回车执行：

```bash
vi /etc/rc.local
```

之后按```i键```进入编辑模式，黑框的左下角会出现 ```-- INSERT --``` 字样，用方向键将光标移动到文件中部空行处。然后一次性复制下面的内容，在Xshell里右键，此时复制的内容应该已经粘贴到了Xshell里了。

```bash
service supervisord start
```

注意：supervisord如果启动过程中报错"No module named supervisor.supervisord"，找不到模块，需要安装一下

```bash
pip install supervisord
```





\```

完成后，按```ESC键```退出编辑模式，黑框的左下角``` -- INSERT --``` 字样消失，输入```:wq```，回车执行，这时文件保存并返回。

6. 重启服务器

执行命令:

```bash
reboot
```



7. 客户端配置

以Windows客户端为例，说一下客户端的配置。

将下载的压缩包解压，双击.exe文件运行，如果没有弹窗，查看系统右下角工具栏纸飞机图标，**右键图标——选择“服务器”——选择“编辑服务器”**，打开如下界面：

![Shadowsocks Windows客户端](http://upload-images.jianshu.io/upload_images/6183756-19c8e929ed46c442.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

服务器IP ：**第一步获取到的ip**

服务器端口 ：**第二步第五小步设置的端口**（port），比如：2333

密码 ：**第二步第五小步设置的密码**（password），比如:mima12345

加密 ： 第二步第五小步设置的加密方式（method），默认为：**aes-256-cfb**

备注 不用填

代理端口 建议使用默认端口1080

配置完成，点击确定，然后在工具栏右键纸飞机图标，启动系统代理，现在打开[谷歌]([https://www.google.com.hk/](https://www.google.com.hk/))看看墙外的世界。

至于其他菜单的功能，靠你自己摸索了。

**附：Shadowsocks [windows/releases](https://github.com/shadowsocks/shadowsocks-windows/releases) 客户端**：[Shadowsocks-4.0.4.zip](https://github.com/shadowsocks/shadowsocks-windows/releases/download/4.0.4/Shadowsocks-4.0.4.zip)

  **其它**： [clients](http://shadowsocks.org/en/download/clients.html)

### 二. Kcptun服务端

[参考来源](http://www.gblm.net/209.html)

1. 执行Kcptun自动化安装脚本

```bash
wget https://raw.githubusercontent.com/kuoruan/kcptun_installer/master/kcptun.sh

chmod +x ./kcptun.sh

./kcptun.sh

```



① *设置 Kcptun 的服务端端口*：一个未被占用的端口，Kcptun 运行时将使用此端口。

② *设置加速的 IP*：如果你想加速 Shadowsocks，而 Shadowsocks 就在运行在当前服务器上，直接回车即可。如果 Shadowsocks 运行在其他服务器，请输入服务器的 IP 地址。这也就是说，Kcptun 不仅能加速本地的端口，也能加速远端的端口。

③ *设置需要加速的端口*：一定是你的shadowsocks端口才行。

④ *设置 Kcptun 密码*：如果你这里选择直接回车，也就是代表你不自定义密码。但是 Kcptun 有一个默认的密码，是： it’s a secrect 。如果你这里选择不设置密码，那么客户端的参数里边就不需要加 –key 这一参数，但是 Kcptun 还是会用上面一个密码做默认值。

剩下的配置项不用我说了，如果你了解它是干什么的，可以自定义配置，如果不知道，那么直接回车使用默认参数。

（而且设置错误也没有什么关系，可以修改配置文件。）

如果安装成功，应该能看到如下输出信息：

```bash
恭喜, Kcptun Server 配置完毕！

服务器IP:  10.10.10.10

端口:  554

加速地址: 10.10.10.10:8388

加密方式 Crypt:  none

加速模式 Mode:  fast2

……….

……

```



这些数据很重要，建议截图下来，等一下设置客户端有用。

注：*这里设置Kcptun时会覆盖之前设置shadowsocks时的supervisord.conf，所以之后需要再修改一遍supervisord.conf，修改要求同上。（下次重新部署的时候再来补充）*

如需更新：

```bash
./kcptun.sh update
```



重新配置：

```bash
./kcptun.sh reconfig
```



卸载：

```bash
./kcptun.sh uninstall
```



### 三. KcpTun PC客户端

[参考来源](https://www.8dlive.com/post/371.html)

1. **[kcptun/releases](https://github.com/xtaci/kcptun/releases)** 客户端：[kcptun-windows-amd64-20170525.tar.gz](https://github.com/xtaci/kcptun/releases/download/v20170525/kcptun-windows-amd64-20170525.tar.gz)
2. **[kcptun_gclient/releases](https://github.com/dfdragon/kcptun_gclient/releases)** 客户端：[kcptun_gclient v.1.1.1.zip](https://github.com/dfdragon/kcptun_gclient/releases/download/v1.1.1/kcptun_gclientv.1.1.1.zip)

配置参考下图。注：本地侦听端口是你搬瓦工后台影梭的端口，端口才是你自己设置的Kcptun的端口，kcp服务器地址为你搬瓦工的地址。

![tupian](http://upload-images.jianshu.io/upload_images/6183756-e6961b74778bb8ff.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)