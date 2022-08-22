module.exports = {
    devServer: { 
        // compress: true,  // 启用压缩，代码占的空间少，在互联网传输快
        host: "localhost",
        port: "8090",
        hot: true, // 启用热启动。
        open: true,//默认第一次运行时调起浏览器打开项目
        proxy: {
            '/api': {
                target: "http://10.2.2.14:8080",
                ws: true,// 是否启用websockets
                changeOrigin: true,// 是否允许跨域
                pathRewrite: {
                    '^/api' : ''
                },
                // cookieDomainRewrite:{"*":"localhost"}
                // onProxyReq:(proxyReq)=>{
                //     proxyReq.setHeader("Cookie","grwng_uid=2ef6d3fe-45d6-457d-8479-8d0feb600a32");
                //     proxyReq.setHeader("Referer","https://m.chuangkit.com/pages/home/index");
                // }
            },

            /* '/api2': {   // 想用api2 上面api得改成api1
                target: "https://search.beitaichufang.com",
                // ws: true,// 是否启用websockets
                changeOrigin: true,// 是否允许跨域
                pathRewrite: {
                    '^/api2' : ''
                },
            }, */

        },

    }
}

// https://api.chuangkit.com