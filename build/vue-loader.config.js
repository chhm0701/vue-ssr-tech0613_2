module.exports = (isDev) => {
    return {
        preserveWhitepace: true, //去空格
        extractCSS: !isDev, //把vue中css打包到css的文件中一次性加载css
        cssModules: {
            localIdentName: isDev ? '[path]-[name]-[hash:base64:5]': '[hash:base64:5]',
            camelCase: true
        },
        //postcss
        //hotReload:false, //根据环境变量生成
        /*
        loaders:{
            'docs': docsLoader
        },
        preLoader: {
           
        },
        postLoader:{

        }
        */

    }
}