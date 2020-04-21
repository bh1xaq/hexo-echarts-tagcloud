"use strict";
let nunjucks = require("nunjucks");
let fs = require("hexo-fs");
let path = require("path");
let env = new nunjucks.Environment();

env = nunjucks.configure({ autoescape: false });

hexo.extend.generator.register("echart-tagcloud", function (site) {
  if (hexo.config.tagcloud.enable) {
    // 文件路径
    let libPath = path.join(
      path.join(
        path.join(hexo.base_dir, "node_modules"),
        "hexo-echarts-tagcloud"
      ),
      "lib"
    );

    let echartswordcloudPath = path.join(
      path.join(hexo.public_dir, "js/tagcloud"),
      "echarts-wordcloud.min.js"
    );

    let echartsPath = path.join(
      path.join(hexo.public_dir, "js/tagcloud"),
      "echarts.simple.js"
    );

    let tagcloudPath = path.join(
      path.join(hexo.public_dir, "js/tagcloud"),
      "tagcloud.js"
    );

    // 生成文件
    let tagcloud = nunjucks.compile(
      fs.readFileSync(path.join(libPath, "tagcloud.js.tp")),
      env
    );

    // 标签
    let tags = [];
    for (let i = 0; i < site.tags.data.length; i++) {
      tags.push({
        name: site.tags.data[i].name,
        permalink: site.tags.data[i].permalink,
        value: site.tags.data[i].posts.length,
      });
    }

    var tk = tagcloud.render({
      documentId: hexo.config.tagcloud.documentId,
      tags: JSON.stringify(tags),
    });

    // 拷贝文件
    fs.writeFile(tagcloudPath, tk);
    fs.copyFile(path.join(libPath, "echarts.simple.js"), echartsPath);
    fs.copyFile(
      path.join(libPath, "echarts-wordcloud.min.js"),
      echartswordcloudPath
    );
  }
});
