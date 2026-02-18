#!/bin/bash

rm -rf dist/ .svelte-kit/

# Build library
pnpm i
pnpm build

# Start examples
cd examples
pnpm i
pnpm dev
