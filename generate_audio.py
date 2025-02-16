# Convert all .wav to .mp3 in a folder
# 
# Get-ChildItem -Path ".\*.wav" | ForEach-Object {
#   $wavFile = $_.FullName
#   $mp3File = [System.IO.Path]::ChangeExtension($wavFile, ".mp3")
#   ffmpeg -i "$wavFile" "$mp3File"
# }

import torch
from TTS.api import TTS
import os
import glob
import requests
import markdown
from bs4 import BeautifulSoup
import yaml

# Set up device
device = "cuda" if torch.cuda.is_available() else "cpu"
tts = TTS("tts_models/en/vctk/vits").to(device)

blog_dir = './src/blogs'

# Use glob to find all .md files in the specified directory
md_files = glob.glob(f'{blog_dir}/*.md')

# List to store the articles with their title and content
articles = []

def check_folder(foldername):
    if not os.path.isdir(foldername):
        os.makedirs(foldername)

def parse_frontmatter(md_content):
    if md_content.startswith('---'):
        end = md_content.find('---', 3)
        if end != -1:
            frontmatter = md_content[3:end].strip()
            body = md_content[end+3:].strip()
            html_content = markdown.markdown(body)
            soup = BeautifulSoup(html_content, 'html.parser')
            return yaml.safe_load(frontmatter), soup.get_text()
    return {}, md_content

for md_file in md_files:
    with open(md_file, 'r', encoding='utf-8') as file:
        article_content = file.read()

    frontmatter, content = parse_frontmatter(article_content)
    articles.append({
        **frontmatter,
        "content": content,
    })

# Process each article and save its audio
for article in articles:
    title = article['title']
    slug = article['slug']
    text_content = article['content']

    file_path = os.path.join('.', 'public', 'audio', f'{slug}.wav')

    print("Writing file:", file_path)

    if not os.path.exists(file_path) and text_content:
        # Save the audio file
        tts.tts_to_file(
            text=text_content, 
            file_path=file_path, 
            speaker="p258"
        )
