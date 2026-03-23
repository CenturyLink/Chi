#!/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

cd "$ROOT"

PKG_BACKUP="$(mktemp)"
LOCK_BACKUP="$(mktemp)"

cp package.json "$PKG_BACKUP"
cp package-lock.json "$LOCK_BACKUP"
cp tests/package-tests.json package.json

npm install

mv package-lock.json tests/package-lock-tests.json
cp "$PKG_BACKUP" package.json
cp "$LOCK_BACKUP" package-lock.json

rm -f "$PKG_BACKUP" "$LOCK_BACKUP"
echo "[CHI]: tests/package-lock-tests.json updated from tests/package-tests.json"
