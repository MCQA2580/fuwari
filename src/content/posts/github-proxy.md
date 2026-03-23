---
title: 终极版！国内免梯上Github！
published: 2026-03-11
description: 巨简单！1分钟自建你的Github代理！
tags: [Github, 代理, 教程]
category: 教程
draft: false
image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=GitHub%20proxy%20setup%20with%20Cloudflare%20Pages%20dashboard&image_size=landscape_16_9"
---

## 为什么需要Github代理？

在国内访问Github时，经常会遇到访问速度慢、连接不稳定甚至无法访问的问题。这主要是由于网络环境的限制导致的。通过搭建自己的Github代理，可以有效解决这些问题。

## 方法原理

我们可以利用Cloudflare Pages或Workers来搭建一个Github代理，这样就可以通过Cloudflare的全球边缘节点来访问Github，从而绕过网络限制。

## 搭建步骤

### 1. 准备工作

- 一个Github账号
- 一个Cloudflare账号

### 2. 创建Cloudflare Pages项目

1. 登录Cloudflare控制台
2. 进入Pages页面
3. 创建新项目
4. 选择从Github仓库部署
5. 选择一个空仓库或创建新仓库

### 3. 部署代理代码

在仓库中创建以下文件：

**index.html**

```html
<!DOCTYPE html>
<html>
<head>
    <title>Github Proxy</title>
</head>
<body>
    <h1>Github Proxy</h1>
    <p>使用方法：将github.com替换为你的pages域名</p>
    <p>例如：https://github.com/saicaca/fuwari → https://your-pages-domain.pages.dev/saicaca/fuwari</p>
</body>
</html>
```

**_worker.js**

```javascript
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url)
  const path = url.pathname
  
  // 跳过根路径
  if (path === '/' || path === '/index.html') {
    return fetch(request)
  }
  
  // 构建Github URL
  const githubUrl = 'https://github.com' + path + url.search
  
  // 转发请求
  const response = await fetch(githubUrl, {
    method: request.method,
    headers: request.headers,
    body: request.body
  })
  
  // 返回响应
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  })
}
```

### 4. 部署并使用

1. 提交代码到Github仓库
2. Cloudflare Pages会自动部署
3. 部署完成后，使用你的Pages域名访问Github

## 使用方法

将Github URL中的 `github.com` 替换为你的Pages域名即可，例如：

- 原URL：`https://github.com/saicaca/fuwari`
- 代理URL：`https://your-pages-domain.pages.dev/saicaca/fuwari`

## 优势

- **完全免费**：使用Cloudflare Pages的免费计划
- **部署简单**：只需几分钟即可完成
- **访问速度快**：利用Cloudflare的全球边缘节点
- **无需维护**：部署后无需额外维护

## 注意事项

- 不要用于非法用途
- 遵守Github的使用条款
- 注意流量使用，避免滥用

通过这种方法，你可以轻松搭建自己的Github代理，享受流畅的Github访问体验！