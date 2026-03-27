# 🍥 Fuwari

基于 [Astro](https://astro.build) 开发的静态博客模板。

**[🖥️ 在线预览（Vercel）](https://as.mcqa25x.dpdns.org/)**

!\[Preview Image]\(https\://raw\.githubusercontent.com/saicaca/resource/main/fuwari/home.png null)

## ✨ 功能特性

- [x] 基于 Astro 和 Tailwind CSS 开发
- [x] 流畅的动画和页面过渡
- [x] 亮色 / 暗色模式
- [x] 自定义主题色和横幅图片
- [x] 响应式设计
- [ ] 评论
- [x] 搜索
- [x] 文内目录


## 🚀 使用方法

1. 克隆仓库到本地
2. 执行 `pnpm install` 和 `pnpm add sharp` 以安装依赖
   - 若未安装 [pnpm](https://pnpm.io)，执行 `npm install -g pnpm`
3. 通过配置文件 `src/config.ts` 自定义博客
4. 执行 `pnpm new-post <filename>` 创建新文章，并在 `src/content/posts/` 目录中编辑
5. 参考[官方指南](https://docs.astro.build/zh-cn/guides/deploy/)将博客部署至 Vercel, Netlify, GitHub Pages 等；部署前需编辑 `astro.config.mjs` 中的站点设置。

## ⚙️ 文章 Frontmatter

```yaml
---
title: 文章标题
published: 2023-09-09
description: 文章描述
tags: [标签1, 标签2]
category: 分类
draft: false
image: 图片链接 # 可选，文章封面图
lang: zh_CN      # 仅当文章语言与 `config.ts` 中的网站语言不同时需要设置
---
```

## 🧞 指令

下列指令均需要在项目根目录执行：

| Command                           | Action                            |
| :-------------------------------- | :-------------------------------- |
| `pnpm install` 并 `pnpm add sharp` | 安装依赖                              |
| `pnpm dev`                        | 在 `localhost:4321` 启动本地开发服务器      |
| `pnpm build`                      | 构建网站至 `./dist/`                   |
| `pnpm preview`                    | 本地预览已构建的网站                        |
| `pnpm new-post <filename>`        | 创建新文章                             |
| `pnpm astro ...`                  | 执行 `astro add`, `astro check` 等指令 |
| `pnpm astro --help`               | 显示 Astro CLI 帮助                   |

## 📁 项目结构

```
├── src/
│   ├── components/          # 组件
│   ├── content/             # 内容
│   │   ├── posts/           # 文章
│   │   └── spec/            # 其他内容
│   ├── layouts/             # 布局
│   ├── pages/               # 页面
│   │   └── api/             # API 端点
│   ├── styles/              # 样式
│   ├── config.ts            # 配置文件
│   └── utils/               # 工具函数
├── public/                  # 静态资源
├── astro.config.mjs         # Astro 配置
└── package.json             # 项目配置
```

## 🔧 配置说明

### 基本配置

在 `src/config.ts` 文件中可以配置以下内容：

- `title`: 网站标题
- `subtitle`: 网站副标题
- `lang`: 网站语言
- `themeColor`: 主题颜色
- `banner`: 横幅设置
- `toc`: 目录设置
- `favicon`: 网站图标

### 导航配置

在 `src/config.ts` 文件的 `navBarConfig` 中可以配置导航栏链接。

### 个人信息配置

在 `src/config.ts` 文件的 `profileConfig` 中可以配置个人信息和社交媒体链接。

## 🤝 贡献

<br />

<br />

欢迎提交 Issue 和 Pull Request 来改进这个项目！

## 📄 许可证

本项目基于 [MIT 许可证](./LICENSE) 开源。

版权所有 (c) 2024 [saicaca](https://github.com/saicaca) 和 [贡献者](./graphs/contributors)。
