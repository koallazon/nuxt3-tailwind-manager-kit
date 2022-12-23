FROM node:18.12.1

# Dockerfile 관리자
LABEL maintainer="ltg2206@hanatour.com"
LABEL version="1.0"
LABEL description="Nuxt3 Dockerfile"

ARG PROFILE=${PROFILE}
ARG APP_NAME=${APP_NAME}

ENV TZ=Asia/Seoul
ENV PROFILE=${PROFILE}
ENV APP_NAME=${APP_NAME}
ENV HOST=0.0.0.0

# 타임존 설정
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

# /app 디렉토리를 workdir로 설정
WORKDIR /${APP_NAME}

# 현재 Dockerfile에 있는 경로의 모든 파일을 /app에 복사
ADD . /${APP_NAME}

# 앱 의존성 설치 및 앱 빌드
RUN npm install -g pnpm \
 && pnpm install \
 && pnpm build:${PROFILE}

# app run
ADD scripts/docker/run.sh run.sh
RUN chmod +x run.sh
CMD ["sh", "./run.sh"]