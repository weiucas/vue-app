<template>  
    <div class="container">  
    <div class="search-container">  
      <input  
        type="text"  
        v-model="searchText"  
        placeholder="请输入搜索内容"  
        @keyup.enter="fetchResults"  
        class="search-input"  
      />  
      <button class="search-button" @click="fetchResults">搜索</button>  
    </div> 
    <div v-if="Object.keys(searchResults).length > 0" class="search-results">  
        <ul>  
            <li v-for="(value, key) in searchResults.menu_data" :key="key">  
            {{ key }}: {{ value }}  
            </li>  
        </ul>  
    </div>
    <div v-if="Object.keys(searchResults).length > 0" class="search-results">  
        <ul>  
          <li v-for="(id, index) in searchResults.top_k_ids" :key="index">  
            ID: {{ id }}, Distance: {{ searchResults.distances[index] }}  
          </li>
        </ul>  
    </div>
    </div> 
  </template>   
    
  <script>  
  import axios from 'axios';  
    
  export default {  
    name: 'SearchResults', // 修改组件名称为多单词
    data() {  
      return {  
        searchText: '', // 用户输入的查询文本  
        result: null, // 查询结果 
        searchResults: [], // 用于存储搜索结果 
        error: null // 查询错误  
      };  
    },  
    // const response = await axios.get(`/api/search_text?input_text=${encodeURIComponent(this.searchText)}&k=10`);  
    methods: {  
    fetchResults() {  
      if (this.searchText.trim() !== '') {  
        axios.get(`/api/search_text?input_text=${encodeURIComponent(this.searchText)}&k=10`)  
          .then(response => {    
            console.log(response.data.data) 
            this.searchResults = response.data.data || []; 
            // console.log(this.searchResults) 
            console.log("top_k_ids", this.searchResults.top_k_ids)
          }) 
          .catch(error => {  
            console.error('搜索出错:', error);  
            this.searchResults = []; // 清空搜索结果  
          });  
      } else {  
        this.searchResults = []; // 清空搜索结果  
        alert('请输入搜索内容！');  
      }  
    }  
  }
  }  
  </script>

<style scoped>  
.search-container {  
  position: relative;  
  display: inline-flex; /* 使用flex布局 */  
  align-items: center; /* 垂直居中 */  
  border: 1px solid #ccc;  
  border-radius: 5px;  
  overflow: hidden;  
}  
  
.search-input {  
  flex: 1; /* 占据剩余空间 */  
  padding: 10px 15px;  
  border: none;  
  outline: none;  
  font-size: 16px;  
  border-radius: 5px 0 0 5px; /* 左侧圆角 */  
}  
  
.search-button {  
  padding: 10px 20px; /* 增加内边距以增大按钮 */  
  background-color: #4285f4;  
  color: white;  
  font-size: 16px;  
  border: none;  
  border-radius: 0 5px 5px 0; /* 右侧圆角 */  
  cursor: pointer;  
  transition: background-color 0.3s;  
}  
  
.search-button:hover {  
  background-color: #3367d6;  
}  
.search-results {  
  margin-top: 10px; /* 与搜索按钮保持一定距离 */  
  border: 1px solid #ddd; /* 可选：给搜索结果添加边框 */  
  border-radius: 5px; /* 可选：给搜索结果添加圆角 */  
  padding: 10px; /* 可选：给搜索结果添加内边距 */  
  background-color: #f9f9f9; /* 可选：给搜索结果添加背景色 */  
}  
  
.search-results ul {  
  list-style-type: none; /* 移除列表项前的默认标记 */  
  padding: 0; /* 移除默认的内边距 */  
}  
  
.search-results li {  
  margin-bottom: 10px; /* 可选：给列表项之间添加一些间距 */  
}

.container {  
  /* 可以设置一些内边距、边距或高度，但这不是必需的 */  
  padding: 5% 10%; /* 可选：给容器添加一些内边距 */  
}  

.search-container {  
  /* position: absolute; 绝对定位 */
  /* top: 10vh; 距离页面顶部10%的视口高度   */
  width: 100%; /* 或者你想要的宽度 */  
  max-width: 500px; /* 限制最大宽度 */   
}


    
</style>