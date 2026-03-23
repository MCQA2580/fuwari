---
title: Markdown 扩展功能
published: 2024-05-01
updated: 2024-11-29
description: '了解 Fuwari 中的 Markdown 扩展功能'
image: ''
tags: [演示, 示例, Markdown, Fuwari]
category: '示例'
draft: false 
---

## GitHub 仓库卡片
您可以添加链接到 GitHub 仓库的动态卡片，页面加载时，仓库信息会从 GitHub API 获取。

::github{repo="Fabrizz/MMM-OnSpotify"}

使用代码 `::github{repo="<owner>/<repo>"}` 创建 GitHub 仓库卡片。

```markdown
::github{repo="saicaca/fuwari"}
```

##  admonition 提示框

支持以下类型的 admonition：`note` `tip` `important` `warning` `caution`

:::note
突出显示用户应该考虑的信息，即使在浏览时也能注意到。
:::

:::tip
帮助用户更成功的可选信息。
:::

:::important
用户成功所必需的关键信息。
:::

:::warning
由于潜在风险需要用户立即注意的关键内容。
:::

:::caution
操作的潜在负面后果。
:::

### 基本语法

```markdown
:::note
突出显示用户应该考虑的信息，即使在浏览时也能注意到。
:::

:::tip
帮助用户更成功的可选信息。
:::
```

### 自定义标题

admonition 的标题可以自定义。

:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::

```markdown
:::note[我的自定义标题]
这是一个带有自定义标题的注释。
:::
```

### GitHub 语法

> [!TIP]
> [GitHub 语法](https://github.com/orgs/community/discussions/16925) 也受支持。

```
> [!NOTE]
> GitHub 语法也受支持。

> [!TIP]
> GitHub 语法也受支持。
```

### 剧透

您可以在文本中添加剧透。文本还支持 **Markdown** 语法。

内容 :spoiler[被隐藏了 **啊**]！

```markdown
内容 :spoiler[被隐藏了 **啊**]！

```