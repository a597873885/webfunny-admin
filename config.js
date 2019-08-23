/**
 * 请先配置您的域名!!!
 */
const customerConfig = {
  default_api_server_url: "//localhost:8011",  // 请求接口域名 webfunny-servers 的服务的部署域名
  default_assets_url: "//localhost:8010"       // 静态资源域名 webfunny-admin 的部署域名
}

var fs = require('fs');
let path = './webfunny';
let files = fs.readdirSync(path);
for(let i = 0; i < files.length; i++){
  if ( !(files[i].indexOf(".js") >= 0 || files[i].indexOf(".html") >= 0) ) {
    continue
  }
  fs.readFile(`${path}/${files[i]}`,function(err, data){
      if (data.indexOf("default_api_server_url") >= 0 || data.indexOf("default_assets_url") >= 0 ) {
        let newString = data.toString().replace(/default_api_server_url/g, customerConfig.default_api_server_url).replace(/default_assets_url/g, customerConfig.default_assets_url)
        fs.writeFile(`${path}/${files[i]}`, newString, (err) => {
          if (err) throw err;
          console.log(files[i] + "  接口域名配置成功！");
        });
      }
  })
}