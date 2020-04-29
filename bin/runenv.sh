#!/usr/bin/env bash
rm -rf package-lock.json yarn.lock node_modules
cp env/.env.local .env
npm install
npm install git+ssh://git@github.com/madeiramadeirabr/drmanhattan-foundation.git#master