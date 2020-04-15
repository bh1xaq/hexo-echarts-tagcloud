# hexo-echarts-tagcloud

基于echarts的hexo标签云插件

![效果](https://cdn.txisfine.cn/upload/20200415162757.png)

## 安装

- 安装 npm install g hexo-echarts-tagcloud

- 修改 _config.yml 文件

```
# hexo-echarts-tagcloud
tagcloud: 
  enable: true
  documentId: card-tag-cloud
```
enable配置是否启用插件
documentId标记tag组件id

## 在模板中挂载标签云插件

- Pug格式模板
在主题目录原tag模板位置中新增以下内容
```
if config.tagcloud.enable
        script(type="text/javascript" charset="utf-8" src="/js/tagcloud/echarts.simple.js")
        script(type="text/javascript" charset="utf-8" src="/js/tagcloud/echarts-wordcloud.js")
        script(type="text/javascript" charset="utf-8" src="/js/tagcloud/tagcloud.js")
        #card-tag-cloud(class=["card-tag-cloud"] style={height:"500px"})
```
注意，你需要给这个组件定义一个高度，style={height:"500px"}

其他格式的模板正在适配中……

## 反馈

tocker@16iot.cn

## 开源许可证

[Apache License.](https://www.apache.org/licenses/)
