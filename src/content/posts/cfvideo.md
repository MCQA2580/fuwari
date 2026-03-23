---
title: 教你在Cloudflare上原生托管视频！自建YouTube！
date: 2026-03-23 10:00:00
updated: 2026-03-23 10:00:00
published: true
categories: [教程]
tags: [Cloudflare, 视频托管, 流媒体]
---

## 引言

你是否想知道如何在Cloudflare上原生托管视频，打造自己的YouTube？本文将详细介绍如何利用Cloudflare的边缘节点来托管和流式播放视频，绕过文件大小限制，实现高效的视频分发。

## 原理

视频本质上就是文件，而Cloudflare的Page/Worker服务支持在边缘节点上直接存放文件。你可能会担心Cloudflare对单文件大小的限制（最大25MB），但通过现代Web的流媒体播放技术，我们可以轻松绕过这个限制。

### 流媒体传输原理

现代流媒体播放采用分片传输技术：
- 将大视频文件分割成多个小片段
- 客户端只需要下载一个小片即可开始播放
- 后续采用边播边下载的方式
- 这样每个分片文件都可以控制在25MB以内

## 实操步骤

### 1. 准备视频文件

首先，准备一个你想要托管的视频文件。本文以一个AV1编码的MP4文件为例，大小约1GB。

### 2. 使用FFmpeg进行视频分片

使用FFmpeg将视频转换为流式MP4格式：

```bash
ffmpeg -i 0.mp4 -map 0 -c copy -f dash -seg_duration 4 -use_template 1 -use_timeline 1 manifest.mpd
```

执行命令后，你将得到：
- 一个 `.mpd` 索引文件
- 一堆 `.m4s` 分片文件

查看生成的文件，最大的分片通常在18MB左右，完全符合Cloudflare的25MB限制。

![FFmpeg命令执行示意图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Command%20line%20interface%20showing%20FFmpeg%20command%20execution%20for%20video%20streaming%20conversion%2C%20displaying%20terminal%20output%20with%20file%20segmentation%20process&image_size=landscape_16_9)

### 3. 上传到Cloudflare Pages

将生成的所有文件（包括 `.mpd` 和 `.m4s` 文件）上传到Cloudflare Pages：

1. 登录Cloudflare控制台
2. 创建一个新的Pages项目
3. 上传所有分片文件
4. 绑定一个域名

### 4. 在网站中嵌入视频

使用Dash.js在浏览器中流式播放视频：

1. 在页面中引入Dash.js库：

```html
<script src="https://cdn.dashjs.org/latest/dash.all.min.js"></script>
```

2. 添加视频播放器：

```html
<video data-dashjs-player src="https://your-domain.com/path/to/manifest.mpd" controls autoplay></video>
```

![视频播放器嵌入示例图](https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=Web%20browser%20showing%20embedded%20video%20player%20with%20Dash.js%20streaming%20video%20playing%2C%20displaying%20video%20controls%20and%20playback%20interface&image_size=landscape_16_9)

## 优势

- **成本低**：Cloudflare Pages提供免费的静态资产托管
- **速度快**：利用Cloudflare的全球边缘节点，实现就近访问
- **无带宽限制**：没有流量限制，适合高流量视频播放
- **绕过大小限制**：通过分片技术，支持任意大小的视频

## 注意事项

- 确保视频编码格式兼容现代浏览器
- 分片大小建议设置在15-20MB之间，以获得最佳性能
- 对于大型视频，可能需要更长的处理时间
- 确保你的Cloudflare Pages项目设置正确，允许访问所有文件

## 结论

通过这种方法，你可以轻松在Cloudflare上托管视频，打造自己的视频平台。无论是个人博客还是企业网站，都可以利用这种方式提供高质量的视频内容，而无需支付昂贵的视频托管费用。

现在，你已经掌握了在Cloudflare上原生托管视频的全部技巧，赶紧动手试试吧！