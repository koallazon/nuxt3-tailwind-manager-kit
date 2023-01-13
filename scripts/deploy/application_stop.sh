#!/bin/bash

# 환경파일 로드
source ./config.sh

docker stop ${APP_NAME}
docker rm ${APP_NAME}

exit 0
