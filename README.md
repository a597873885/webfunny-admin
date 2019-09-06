### 数据可视化系统平台部署教程

1. 克隆或者下载代码

2. 进入 webfunny-admin 目录，执行命令 $: node config.js  等待编译完成。 config.js的配置如下：
         
         /**
          * 请求接口域名 webfunny-servers 的服务的部署域名
          * 本地请使用 "//localhost:8011"
          */
        const default_api_server_url = "//localhost:8011"

        /**
         * 静态资源域名 webfunny-admin 的部署域名
         * 本地请使用 "//localhost:8010"
         */
        const default_assets_url = "//localhost:8010"

3. 安装ngnix, 进入nginx的根目录，在配置文件nginx.conf中 http { ... } 节点下，增加一段配置 （这段配置代码是必须的, 根目录下nginx.conf为配置示例）

        server {
          listen       8010;
          server_name  localhost;
          root /Users/jeffery/MonitorProjects/webfunny-admin; # 这是项目的绝对路径
          try_files $uri /webfunny/index.html;
        }
    
4. 启动Nginx

5. 在浏览器地址栏输入：[http://localhost:8010/webfunny/home](http://localhost:8010/webfunny/home)
