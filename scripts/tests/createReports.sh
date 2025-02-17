#!/bin/bash

mkdir -p reports/html_report/non_responsive{,_ce}
mkdir -p reports/html_report/responsive

cp -a backstop_data/bitmaps_reference/non_responsive reports/html_report/non_responsive_ce/bitmaps_reference >/dev/null 2>&1
cp -a backstop_data/bitmaps_reference/non_responsive reports/html_report/non_responsive/bitmaps_reference >/dev/null 2>&1
cp -a backstop_data/bitmaps_reference/responsive reports/html_report/responsive/bitmaps_reference >/dev/null 2>&1