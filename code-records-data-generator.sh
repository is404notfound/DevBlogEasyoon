# 빌드 시 동작하는 스크립트 입니다.
# 프로젝트 내 아래 확장자의 파일들의 총 라인 수를 구합니다.
# 포함 확장자 : tsx|ts|js|css|json|sh
# 나온 값을 컴포넌트에서 파싱할 수 있도록 빌드 한 날짜와 함께 txt 파일로 저장합니다.
# TODO: 중복 제거, 새 데이터 추가

# 현재 날짜를 YYYY-MM-DD 형식으로 저장
date=$(date +'%Y-%m-%d')

# 이전 기록이 있는지 확인
previous_record=$(grep "^$date|" code-records-data.json)

# 라인 수를 계산하고 결과를 저장 (grep : 파일 내 특정 문자열을 찾음)
lines=$(git ls-files | grep -E '\.(tsx|ts|js|css|json|sh)$' | xargs wc -l | tail -n 1 | awk '{print $1}')

# 이전 기록이 있는 경우에는 해당 기록을 업데이트 (-n : 문자열의 길이가 0인지 반환)
if [ -n "$previous_record" ]; then
  # 새로운 파일을 생성하여 기존 파일의 내용을 변경
  grep -v "^$date:" code-records-data.json > temp.json
  echo {\"$date\":$lines} >> temp.json
  mv temp.json code-records-data.json
else
  # 이전 기록이 없는 경우에는 새로운 줄로 추가
  echo {\"$date\":$lines} >> code-records-data.json
fi