#!/bin/bash

PROTO_DIR=./proto
GEN_DIR=${PROTO_DIR}/blog/gen

# Generate javascript code
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${GEN_DIR} \
  --grpc_out=grpc_js:${GEN_DIR} \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I ${PROTO_DIR} \
  ${PROTO_DIR}/*.proto

# Generate typescript code (d.ts)
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:${GEN_DIR} \
  -I ${PROTO_DIR} \
  ${PROTO_DIR}/*.proto
