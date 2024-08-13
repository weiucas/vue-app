const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {  
    proxy: {  
      '/api': {  
        target: 'http://172.17.0.44:8000',  
        changeOrigin: false,  
        pathRewrite: {  
          '^/api': ''  
        }  
      },
      '/local-api': {  
        target: 'http://127.0.0.1:8000',  
        changeOrigin: false,  
        pathRewrite: {  
          '^/local-api': ''  
        }  
      }  
    }  
  } 
})
