#!/bin/bash

# Set the directory containing the .wav files.
directory="./public/audio"

# Loop through all .wav files in the specified directory.
find "$directory" -maxdepth 1 -name "*.wav" -print0 | while IFS= read -r -d $'\0' wav_file; do

  # Extract the filename without the extension.
  filename="${wav_file%.*}"

  # Construct the output mp3 filename.
  mp3_file="${filename}.mp3"

  # Convert the .wav file to .mp3 using ffmpeg.
  ffmpeg -i "$wav_file" -b:a 320k "$mp3_file" 2  # Redirect stderr to /dev/null for complete suppression

  # Check if the conversion was successful.
  if [ $? -eq 0 ]; then
    echo "Converted: $wav_file to $mp3_file"
    rm "$wav_file"  # Delete the wav file after successful conversion
    echo "Deleted: $wav_file"
  else
    echo "Error converting: $wav_file"
  fi

done

echo "Conversion complete."