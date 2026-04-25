import os
import subprocess
from faster_whisper import WhisperModel

# 设置
input_video = "2026-03-11_康熙来了经典片段_7615775889112788105.mp4"
output_video = "tiktok_ready_version.mp4"
audio_file = "extracted_audio.wav"
model_size = "base"

# 1. 提取音频
print("正在提取音频...")
subprocess.run(["ffmpeg", "-y", "-i", input_video, "-vn", "-acodec", "pcm_s16le", "-ar", "16000", "-ac", "1", audio_file])

# 2. 语音转文字
print("正在转录音频...")
model = WhisperModel(model_size, device="cpu", compute_type="int8")
segments, info = model.transcribe(audio_file, beam_size=5)

chinese_text = ""
for segment in segments:
    chinese_text += segment.text + " "
print(f"识别到的中文文本: {chinese_text}")

# 3. 视觉处理与合成
print("正在生成最终视频（指纹处理与音轨封装）...")
# 镜像翻转 + 调整色相
cmd = [
    "ffmpeg", "-y", "-i", input_video, 
    "-vf", "hflip,eq=hue=0.1", 
    "-i", audio_file,
    "-c:v", "libx264", "-preset", "veryfast", "-crf", "23",
    "-c:a", "aac", "-b:a", "128k", "-map", "0:v:0", "-map", "1:a:0",
    output_video
]
subprocess.run(cmd)

print("完成！视频已保存为:", output_video)
