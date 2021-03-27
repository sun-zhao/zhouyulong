# zhouyulong
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

###当前问题
```
1，LOGO点击要跳转回到home页面的最上方
2，首页点击作品图片进去详情页面，然后回到首页，再点击另外作品，去到的详情页还是上一个的详情，但是传过去的id  变了，
可是数据没变
3。跳转到详情页时候页面滚动条希望在最顶部！现在从首页的中部那个轮播位置跳转过去的时候，详情页显示也显示在对应位置
```
