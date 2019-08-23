### 数据可视化系统平台部署教程

1. 克隆或者下载代码

2. 进入 webfunny-admin 目录，执行命令 $: node config.js

3. 安装ngnix, 进入nginx的根目录，在配置文件nginx.conf中 http节点下，增加一段配置

        server {
          listen       8010;
          server_name  local.webfunny.cn;
          root /Users/jeffery/MonitorProjects/webfunny-admin;
          try_files $uri /webfunny/index.html;
        }
    
4. 启动Nginx

5. 在浏览器地址栏输入：[http://localhost:8010/webfunny/home](http://localhost:8010/webfunny/home)
