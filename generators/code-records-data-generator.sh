# 빌드 시 동작하는 스크립트 입니다.
# 프로젝트 내 아래 확장자의 파일들의 총 라인 수를 구합니다.
# 포함 확장자 : tsx|ts|js|css|sh
# 나온 값을 컴포넌트에서 파싱할 수 있도록 빌드 한 날짜와 함께 txt 파일로 저장합니다.

echo "LOG :: Generating code records data..."

output_file="./generators/output/code-records-data.json"

# 현재 날짜를 YYYY-MM-DD 형식으로 저장
date=$(date +'%Y-%m-%d')

saved_contents=$(cat "$output_file")

# 이전에 같은 date 기록이 있는지 확인
duplicated_record=$(echo $saved_contents | grep -o \"$date\":[0-9]*)

# 라인 수를 계산하고 결과를 저장 (grep : 파일 내 특정 문자열을 찾음)
lines=$(git ls-files | grep -E '\.(tsx|ts|js|css|sh)$' | xargs wc -l | tail -n 1 | awk '{print $1}')

if [ ! -s "$output_file" ]; then
  echo {\"$date\":$lines} >> "$output_file"

elif [ -n "$duplicated_record" ]; then
  new_contents=$(echo $saved_contents | sed "s/$duplicated_record/\"$date\":$lines/")
  echo $new_contents > "$output_file"

else
  new_contents=$(echo $saved_contents | sed "s/}/, \"$date\":$lines}/")
  echo $new_contents > "$output_file"

fi

echo "LOG :: Code records data generated."