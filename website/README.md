# website

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```
###搜索实现思路
```
1，返回的搜索结果里面的list，遍历一下，按照type值分组，生成对应的若干个数组
2，根据type 来渲染页面列表，并绑定对应的跳转详情方法，通过id跳转
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
