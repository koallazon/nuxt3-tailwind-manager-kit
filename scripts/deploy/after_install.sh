#!/bin/bash

source ./config.sh

$(aws ecr get-login --no-include-email --region ap-northeast-2)
docker pull ${DOCKER_IMAGE_NAME}:${DOCKER_TAG}