# OpenClaw 安装指南

苏州工业园区天翼云 AI 助手快速上手指南，零基础也能轻松搞定。

**在线访问：** https://echobyte.cn:18189

## 功能概览

本站提供 OpenClaw（小龙虾）的一站式安装引导，包含以下板块：

1. **免费领取天翼云电脑** — 扫码领取 4核8G 云电脑 + 2500万 Token
2. **手动安装 OpenClaw** — Mac / Windows 分步教程
3. **一键安装（推荐）** — 通过 OneClaw 桌面程序自动安装
4. **免费获取 Token** — 天翼云电脑自带 Token + 息壤平台 Token
5. **配置飞书插件** — 让 OpenClaw 接入飞书办公
6. **配置及使用龙虾** — 即将推出

## 本地运行

```bash
cd app
npm install
npm run dev
```

## 构建部署

```bash
cd app
npm run build
node server.mjs
```

服务默认运行在 `https://0.0.0.0:18189`（需配置 SSL 证书）。

## 技术栈

- React + Vite
- 纯静态，无需后端
- Node.js HTTPS 静态服务器

## 支持

苏州园区电信支持团队 提供技术支持及企业上门培训服务
