# @cekerel/dsh-video-wallpaper

DeepSeek Harness 桌面客户端的全屏视频动态背景插件。

## 功能

- 内置默认视频（Pixabay，作者 padrinan，黑胶唱片循环的剪辑版以控制体积；Pixabay Content License 允许修改后再分发，见 [NOTICE.md](NOTICE.md)）
- 自定义视频：文件选择器选取任意 `video/*`，存入 IndexedDB，重启保留；一键切回内置默认
- 实时调节：透明度（0–60%）/ 模糊（0–16px）/ 遮罩
- 主题感知遮罩：遮罩直接调节视频自身（`saturate + contrast + brightness` 滤镜，不叠加任何图层，物理上不接触 UI 文字）——深色主题下压暗视频衬托白字，浅色主题下把视频推向均匀浅底衬托黑字；主题切换即时响应
- 性能：Blob URL 加载（不驻留 base64 字符串）、后台/最小化自动暂停解码
- 卸载清理：卸载/停用时按配置项「卸载时清理本地数据」（默认开启，符合 Cordis 零残留理念）清除 localStorage 配置与 IndexedDB 自定义视频、回收 Blob URL；关闭该开关则保留数据，重装后自动还原；配置页另有「清除全部本地数据（恢复默认）」手动兜底

## 安装（DSH 桌面端）

本包是标准 DSH bundle（`dsh.bundle.patch` + `dsh.client`）。两种方式：

1. **本地路径安装**：DSH 插件页 / `plugin_manager` 的 install，指向本目录
2. **file: 依赖**（当前开发模式）：在 profile 的 `package.json` 加
   `"@cekerel/dsh-video-wallpaper": "file:<本目录绝对路径>"`，并把包名加入
   profile 的 `dsh.profile.bundles`，然后 `pnpm install`

安装后完全重启 DSH 生效。配置入口：插件 → 视频壁纸 → 配置。

## 开发

- `client.js.tmpl`：源码模板（`__VIDEO_URL__` 为内嵌视频占位符）
- `_build.cjs`：把默认视频 base64 内嵌后生成 `client.js`；可传参换源构建私有版
  （如 `node _build.cjs C:/Users/Ther/Videos/ryo.mp4`）
  （需用 DSH runtime 自带 node：
  `...\DeepSeek Harness\resources\runtime\primary-runtime\dependencies\node\bin\node.exe`）
- `node --check client.js` 校验语法
- 修改 `client.js`（编译产物）后需完全重启 DSH 重新加载模块

## 版权

内置默认视频来自 Pixabay（Pixabay Content License，允许再分发），
详见 [NOTICE.md](NOTICE.md)。
