---
title: 如何在直播中让你的观众实时了解你在用什么软件？
published: 2026-03-08
description: 通过持续监测当前前台进程和指定程序的窗口标题，并将结果写入 TXT 文件，就可以让 OBS 实时向观众展示你正在使用的软件或当前播放的内容。
tags: [直播, OBS, 教程]
category: 教程
draft: false
image: "https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=OBS%20Studio%20interface%20showing%20live%20stream%20with%20software%20monitoring%20text%20overlay&image_size=landscape_16_9"
---

## 为什么需要监测软件使用情况？

在直播过程中，观众经常会好奇主播正在使用什么软件，或者当前正在播放什么内容。通过实时显示当前使用的软件名称或窗口标题，可以增强观众的参与感，同时也方便观众了解主播的工作流程。

## 实现原理

我们可以通过编写一个简单的脚本，持续监测当前前台进程和指定程序的窗口标题，然后将结果写入一个TXT文件。OBS可以通过读取这个TXT文件来实时显示软件使用情况。

## 实现步骤

### 1. 编写监测脚本

#### Windows 脚本（PowerShell）

```powershell
# 监测前台进程并写入文件
while ($true) {
    # 获取前台窗口标题
    $foregroundWindow = Get-Process | Where-Object {$_.MainWindowTitle -ne ""} | Sort-Object -Property MainWindowTitle | Select-Object -Last 1
    
    if ($foregroundWindow) {
        $windowTitle = $foregroundWindow.MainWindowTitle
        $processName = $foregroundWindow.ProcessName
        
        # 写入文件
        "当前使用: $processName - $windowTitle" | Out-File -FilePath "C:\temp\current_software.txt" -Force
    }
    
    # 每1秒监测一次
    Start-Sleep -Seconds 1
}
```

#### macOS 脚本（Bash）

```bash
#!/bin/bash

while true; do
    # 获取前台应用
    front_app=$(osascript -e 'tell application "System Events" to get name of first process whose frontmost is true')
    
    # 获取窗口标题
    window_title=$(osascript -e 'tell application "System Events" to get name of window 1 of (first process whose frontmost is true)')
    
    # 写入文件
    echo "当前使用: $front_app - $window_title" > ~/Desktop/current_software.txt
    
    # 每1秒监测一次
    sleep 1
done
```

### 2. 在OBS中添加文本源

1. 打开OBS Studio
2. 点击"+"按钮添加新源
3. 选择"文本 (GDI+)"或"文本"（根据OBS版本）
4. 命名为"当前软件"
5. 选择"从文件读取"选项
6. 浏览并选择你创建的TXT文件
7. 设置更新间隔为1秒
8. 调整文本样式和位置

### 3. 启动监测脚本

- **Windows**：以管理员身份运行PowerShell脚本
- **macOS**：在终端中运行bash脚本

## 高级应用

### 监测特定程序

你可以修改脚本，只监测特定的程序，例如：

```powershell
# 只监测特定程序
$targetProcesses = @("chrome", "firefox", "code", "photoshop")

while ($true) {
    $foregroundWindow = Get-Process | Where-Object {$_.MainWindowTitle -ne ""} | Sort-Object -Property MainWindowTitle | Select-Object -Last 1
    
    if ($foregroundWindow -and $targetProcesses -contains $foregroundWindow.ProcessName) {
        $windowTitle = $foregroundWindow.MainWindowTitle
        $processName = $foregroundWindow.ProcessName
        
        "当前使用: $processName - $windowTitle" | Out-File -FilePath "C:\temp\current_software.txt" -Force
    }
    
    Start-Sleep -Seconds 1
}
```

### 美化显示效果

你可以在OBS中为文本源添加背景、边框等效果，使其更加美观。也可以使用不同的字体和颜色来区分不同类型的软件。

## 总结

通过这种方法，你可以在直播中实时向观众展示你正在使用的软件或当前播放的内容，增强观众的参与感和互动性。脚本简单易用，只需几分钟即可设置完成。

现在，你可以在直播中向观众展示你的工作流程，让他们更好地了解你是如何使用各种软件的！