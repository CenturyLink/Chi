#!/usr/bin/env bash

function die() { echo "ERROR: $*" 1>&2 ; exit 1; }

TMPDIR=$(mktemp -d)
REPO_PATH=$(cd $(dirname $0)/..; pwd)

if [ "x$1" = "xalias" ]; then
  if [ -f ~/.bash_profile ]; then
    sed -i.back '/^alias chi=/d' ~/.bash_profile
    lastline=$(tail -n 1 ~/.bash_profile; echo x); lastline=${lastline%x}
    if [ "${lastline: -1}" != $'\n' ]; then
        echo >> ~/.bash_profile
    fi
    echo "alias chi=\"${REPO_PATH}/scripts/docker.sh\"" >> ~/.bash_profile
    echo "execute: . ~/.bash_profile"
  fi
  exit 0
fi

cp ${REPO_PATH}/Dockerfile ${TMPDIR}/
cp ${REPO_PATH}/package.json ${TMPDIR}/package_chi.json
cp ${REPO_PATH}/src/custom-elements/package.json ${TMPDIR}/package_custom-elements.json
cp ${REPO_PATH}/src/chi-vue/package.json ${TMPDIR}/package_vue.json
cp ${REPO_PATH}/src/documentation/package.json ${TMPDIR}/package_documentation.json
cp ${REPO_PATH}/scripts/entrypoint.sh ${TMPDIR}/

pushd "${TMPDIR}"  > /dev/null
  docker build -t chi:latest .
popd >/dev/null
rm -rf ${TMPDIR}

docker system prune -f 2>&1 >/dev/null &

if [ ! -d "${REPO_PATH}/node_modules" ]
then
  mkdir ${REPO_PATH}/node_modules 2>/dev/null || die "${REPO_PATH}/node_modules must exists and be a directory"
fi

if [ ! -d "${REPO_PATH}/src/custom-elements/node_modules" ]
then
  mkdir ${REPO_PATH}/src/custom-elements/node_modules 2>/dev/null || die "${REPO_PATH}/src/custom-elements/node_modules must exists and be a directory"
fi

if [ ! -d "${REPO_PATH}/src/chi-vue/node_modules" ]
then
  mkdir ${REPO_PATH}/src/chi-vue/node_modules 2>/dev/null || die "${REPO_PATH}/src/chi-vue/node_modules must exists and be a directory"
fi

if [ ! -d "${REPO_PATH}/src/documentation/node_modules" ]
then
  mkdir ${REPO_PATH}/src/documentation/node_modules 2>/dev/null || die "${REPO_PATH}/src/documentation/node_modules must exists and be a directory"
fi

if [ "x$1" = "xstart" ]; then

  docker run --rm -it --name chi \
          --privileged \
          -v ${REPO_PATH}:/chi \
          -p 8000:8000 \
          -p 9090:9090 \
          -p 8001:8001 \
          -p 3333:3333 \
          chi
else
  docker run --rm -ti \
              --privileged \
              --shm-size=2gb \
              --cap-add=SYS_ADMIN \
              -v ${REPO_PATH}:/chi \
              chi $1
fi
