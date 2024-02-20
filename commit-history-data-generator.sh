#!/bin/bash

# 저장할 파일 경로 설정
output_file="commit-history-data.json"

# git 커밋 이력을 파일로 저장 (최근 5개의 커밋)
git log -10 --pretty=format:'"%s"' > "$output_file"

# 파일 내용을 변수에 저장
file_contents=$(cat "$output_file")

# 줄 앞에 번호를 추가
file_contents=$(echo "$file_contents" | awk '{print "\"" NR "\": " $0 ""}')

# 맨 앞과 맨 뒤에 중괄호 추가
file_contents="{ $file_contents }"

# 기록 사이에 쉼표 추가
file_contents=$(echo "$file_contents" | sed 's/$/,/')
file_contents=${file_contents%,}

# 파일에 새로운 내용 덮어쓰기
echo "$file_contents" > "$output_file"

echo "5 latest Git commit history saved to $output_file with braces added and commas added for separation"
