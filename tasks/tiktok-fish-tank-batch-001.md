# TikTok 鱼缸视频批量处理任务

**任务 ID:** tiktok-fish-tank-batch-001  
**创建时间:** 2026-04-12  
**状态:** ⏳ 待执行（缺少依赖）

---

## 📋 任务概述

从 TikTok 爬取鱼缸相关视频，进行批量处理后发布。

### 关键词（5 个）
1. 25 方缸
2. 30 方缸
3. 工业风鱼缸
4. 底滤鱼缸
5. DIY 鱼缸

### 处理参数
| 参数 | 值 | 说明 |
|------|-----|------|
| mirror | true | 水平镜像翻转 |
| speed | 1.1 | 1.1 倍速播放 |
| crop | 2% | 四周裁剪 2% |
| remove_audio | true | 移除原音频 |
| filters | unsharp,hqdn3d | 锐化 + 降噪 |

### 后制要求
- **语言:** en-US（美式英语）
- **字幕主题:** TikTok US style
- **配音:** American_Male（美式男声）
- **背景音乐:** Trending_Lofi_US

---

## ⚠️ 环境依赖检查

### 已安装的工具 ✅
| 工具 | 版本 | 状态 | 路径 |
|------|------|------|------|
| Python 3 | 3.11.9 | ✅ 已安装 | `C:\Users\Administrator\AppData\Local\Programs\Python\Python311` |
| yt-dlp | 2026.03.17 | ✅ 已安装 | `C:\Users\Administrator\AppData\Local\Programs\Python\Python311\Scripts\yt-dlp.exe` |
| ffmpeg | N-123918 | ✅ 已安装 | 系统 PATH |

### 仍需配置
| 工具 | 状态 | 用途 |
|------|------|------|
| CreatorCrawl API | ❌ 未配置 | TikTok 搜索（需要 API 密钥） |

### 已安装的技能
| 技能 | 版本 | 状态 |
|------|------|------|
| tiktok-crawling | 1.0.0 | ✅ 文档技能（仅使用说明） |
| tiktok-scraper | 1.0.0 | ✅ API 技能（需要 API 密钥） |
| ffmpeg-video-editor | 1.0.0 | ✅ 文档技能（仅使用说明） |
| humanizer | 1.0.0 | ✅ 文案处理技能 |

---

## 📝 执行计划

### 阶段 1: 环境准备
```bash
# 1. 安装 Python 3 (如未安装)
# 访问 https://python.org 下载安装

# 2. 安装 yt-dlp
pip install yt-dlp

# 3. 安装 ffmpeg
# Windows: choco install ffmpeg 或从 https://ffmpeg.org 下载
# macOS: brew install ffmpeg
# Linux: sudo apt install ffmpeg

# 4. 获取 CreatorCrawl API 密钥
# 访问 https://creatorcrawl.com 注册，获取 250 免费积分
# 设置环境变量：
# Windows: setx CREATORCRAWL_API_KEY "your_key_here"
# macOS/Linux: export CREATORCRAWL_API_KEY="your_key_here"
```

### 阶段 2: 视频爬取
使用 yt-dlp 搜索并下载每个关键词的视频：

```bash
# 示例：搜索"25 方缸"相关 TikTok 视频
yt-dlp "tiktoksearch:25 方缸" \
  --playlist-end 10 \
  -P "./downloads/25方缸" \
  -o "%(id)s.%(ext)s" \
  --write-info-json \
  --cookies-from-browser chrome
```

**预计下载量:** 5 关键词 × 10 视频 = 50 个视频

### 阶段 3: 视频处理 (FFmpeg)
对每个视频应用以下处理：

```bash
ffmpeg -y -hide_banner -i "input.mp4" \
  -vf "hflip,scale=iw*0.98:ih*0.98,crop=iw:ih,setpts=PTS/1.1,unsharp=5:5:1.0:5:5:0.0,hqdn3d" \
  -af "atempo=1.1" \
  -an \
  -c:v libx264 -preset medium -crf 23 \
  "output_processed.mp4"
```

**处理说明:**
- `hflip` - 水平镜像
- `scale=iw*0.98:ih*0.98` - 缩放 98%（相当于裁剪 2%）
- `setpts=PTS/1.1` - 1.1 倍速
- `unsharp=5:5:1.0:5:5:0.0` - 锐化滤镜
- `hqdn3d` - 高质量 3D 降噪
- `-an` - 移除音频

### 阶段 4: 文案生成 (Humanizer)
为每个视频生成美式风格文案：
1. 分析视频内容
2. 生成初始文案
3. 使用 humanizer 去除 AI 痕迹
4. 调整为 TikTok US style

### 阶段 5: 配音与配乐
```bash
# 使用 TTS 生成配音（需要 TTS 服务）
# 添加 Lofi 背景音乐
# 混合配音和背景音乐

ffmpeg -y -hide_banner \
  -i "video_processed.mp4" \
  -i "voiceover.mp3" \
  -i "lofi_music.mp3" \
  -filter_complex "[1:a]volume=1.0[voice];[2:a]volume=0.3[music];[voice][music]amix=inputs=2:duration=first:dropout_transition=3[audio]" \
  -map 0:v -map "[audio]" -c:v copy -c:a aac -b:a 192k \
  "final_output.mp4"
```

### 阶段 6: 字幕生成
生成美式英语字幕并嵌入视频。

---

## 📊 预期输出

```
output/
├── 25 方缸/
│   ├── video_001_final.mp4
│   ├── video_002_final.mp4
│   └── ...
├── 30 方缸/
├── 工业风鱼缸/
├── 底滤鱼缸/
└── DIY 鱼缸/
```

**总视频数:** 约 50 个  
**单个视频大小:** 约 5-15MB  
**总存储空间:** 约 250-750MB  
**预计处理时间:** 2-4 小时（取决于硬件）

---

## 🔧 快速启动（简化版）

如果只想测试流程，先处理 1 个视频：

```bash
# 1. 下载一个测试视频
yt-dlp "https://www.tiktok.com/@xxx/video/xxx" -o "test.mp4"

# 2. 应用所有滤镜
ffmpeg -y -i "test.mp4" -vf "hflip,scale=iw*0.98:ih*0.98,setpts=PTS/1.1,unsharp=5:5:1.0:5:5:0.0,hqdn3d" -an "test_out.mp4"

# 3. 检查结果
```

---

## 📌 下一步行动

1. **安装依赖** - 先安装 yt-dlp 和 ffmpeg
2. **获取 API 密钥** - 注册 CreatorCrawl 获取免费积分
3. **测试流程** - 先处理 1 个视频验证流程
4. **批量执行** - 确认无误后批量处理 50 个视频

---

**备注:** 此任务需要较高的计算资源和存储空间。建议在有空闲时间时执行。
