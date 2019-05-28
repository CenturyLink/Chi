#!/usr/bin/env bash 

function die() { echo "ERROR: $*" 1>&2 ; exit 1; }

TMPDIR=$(mktemp -d)
REPO_PATH=$(cd $(dirname $0)/..; pwd)

cp ${REPO_PATH}/Dockerfile ${TMPDIR}/
cp ${REPO_PATH}/package.json ${TMPDIR}/package_chi.json 
cp ${REPO_PATH}/src/custom-elements/package.json ${TMPDIR}/package_custom-elements.json
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

if [ "x$1" = "xstart" ]; then

  docker run --rm -it --name chi \
          --privileged \
          -v $PWD:/chi \
          -p 8000:8000 \
          -p 8001:8001 \
          -p 3333:3333 \
          chi
else
  docker run --rm -ti \
              --privileged \
              --shm-size=2gb \
              --cap-add=SYS_ADMIN \
              -v $PWD:/chi \
              chi $1
fi
