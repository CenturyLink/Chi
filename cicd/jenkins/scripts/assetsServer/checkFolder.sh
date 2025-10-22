#!/bin/bash

if [[ -d ux-chi-AssetsServer/chi/"${1}" ]]; then
    check="EXISTS"
else
    check="NO"
fi

echo "$check"