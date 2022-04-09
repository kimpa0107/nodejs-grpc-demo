#!/bin/bash

PROTO_DIR=./proto

# Generate javascript code
grpc_tools_node_protoc \
  --js_out=import_style=commonjs,binary:${PROTO_DIR} \
  --grpc_out=grpc_js:${PROTO_DIR} \
  --plugin=protoc-gen-grpc=./node_modules/.bin/grpc_tools_node_protoc_plugin \
  -I ${PROTO_DIR} \
  ${PROTO_DIR}/*.proto

# Generate typescript code (d.ts)
grpc_tools_node_protoc \
  --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --ts_out=grpc_js:${PROTO_DIR} \
  -I ${PROTO_DIR} \
  ${PROTO_DIR}/*.proto
