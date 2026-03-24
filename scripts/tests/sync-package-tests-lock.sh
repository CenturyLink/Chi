#!/bin/bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/../.." && pwd)"

cd "$ROOT"

PKG_BACKUP="$(mktemp)"
LOCK_BACKUP="$(mktemp)"

restore_root_manifests() {
  if [[ -f "$PKG_BACKUP" ]]; then
    cp "$PKG_BACKUP" package.json
    cp "$LOCK_BACKUP" package-lock.json
    rm -f "$PKG_BACKUP" "$LOCK_BACKUP"
  fi
}

cp package.json "$PKG_BACKUP"
cp package-lock.json "$LOCK_BACKUP"
trap restore_root_manifests EXIT

cp tests/package-tests.json package.json
cp tests/package-lock-tests.json package-lock.json

npm install
npx playwright install --with-deps chromium

restore_root_manifests
trap - EXIT

echo "[CHI]: tests/package-lock-tests.json updated from tests/package-tests.json"
