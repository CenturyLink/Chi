#!/bin/bash

mount -o bind /tmp/chi/node_modules /chi/node_modules
mount -o bind /tmp/documentation/node_modules /chi/src/documentation/node_modules

#mkdir /tmp/dist
#mount -o bind /tmp/dist /chi/dist
#mount -t tmpfs tmpfs /chi/dist

RED='\E[0;31m'
GREEN='\E[0;32m'
BLUE='\033[0;34m'
NC='\E[0m' # No Color

addheader_chi() {
    while IFS= read -r line; do
        echo -e "${RED}[CHI]${NC} $line "
    done
    tput sgr0
}

addheader_custom_elements() {
    while IFS= read -r line; do
        echo -e "${GREEN}[CE]${NC} $line"
    done
}

addheader_docs() {
    while IFS= read -r line; do
        echo -e "${GREEN}[DOCS]${NC} $line"
    done
}

start() {
    cd /chi
    unbuffer npm run start 2>&1 | addheader_chi

    # cd /chi/src/documentation
    # echo -e "Documentation"
    # unbuffer npm run dev 2>&1 | addheader_docs &
}

build() {
    cd /chi
    unbuffer npm run build 2>&1 | addheader_chi

    cd /chi
    unbuffer npm run sri 2>&1 | addheader_chi
    unbuffer npm run update:boilerplate:assets
}

test() {
    rm -rf /chi/reports /chi/test/bitmaps_test
    mkdir -p /chi/reports/html_report/non_responsive{,_ce}
    mkdir -p /chi/reports/html_report/responsive
    cp -a /chi/config/backstop_data/bitmaps_reference/non_responsive /chi/reports/html_report/non_responsive_ce/bitmaps_reference
    cp -a /chi/config/backstop_data/bitmaps_reference/non_responsive /chi/reports/html_report/non_responsive/bitmaps_reference
    cp -a /chi/config/backstop_data/bitmaps_reference/responsive /chi/reports/html_report/responsive/bitmaps_reference

    cd /chi
    npm run test
    unbuffer npm run sri 2>&1 | addheader_chi
    unbuffer npm run update:boilerplate:assets
}

OPTION=$1
if [ -z ${OPTION} ]; then
    OPTION='start'
fi

case ${OPTION} in
    start)
        mount -t tmpfs tmpfs /chi/dist
        start
        ;;
    build)
        build
        ;;
    test)
        mount -t tmpfs tmpfs /chi/dist
        build
        test
        ;;
    test-e2e)
        mount -t tmpfs tmpfs /chi/dist
        build
        cd /chi
        npx gulp serve 2>&1 >/dev/null &
        ./node_modules/.bin/cypress run
        npx gulp serve:stop
        ;;
    approve)
        cd /chi
        mount -o bind /chi/config/backstop_data/bitmaps_reference/non_responsive /chi/reports/html_report/non_responsive/bitmaps_reference
        mount -o bind /chi/config/backstop_data/bitmaps_reference/responsive /chi/reports/html_report/responsive/bitmaps_reference
        npm run approve
        ;;
    *)
        exec "$@"
        ;;
esac
