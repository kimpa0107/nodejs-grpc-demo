// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var blog_pb = require('./blog_pb.js');

function serialize_blog_GetArticlesRequest(arg) {
  if (!(arg instanceof blog_pb.GetArticlesRequest)) {
    throw new Error('Expected argument of type blog.GetArticlesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_GetArticlesRequest(buffer_arg) {
  return blog_pb.GetArticlesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_blog_GetArticlesResponse(arg) {
  if (!(arg instanceof blog_pb.GetArticlesResponse)) {
    throw new Error('Expected argument of type blog.GetArticlesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_blog_GetArticlesResponse(buffer_arg) {
  return blog_pb.GetArticlesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var BlogServiceService = exports.BlogServiceService = {
  getArticles: {
    path: '/blog.BlogService/GetArticles',
    requestStream: false,
    responseStream: false,
    requestType: blog_pb.GetArticlesRequest,
    responseType: blog_pb.GetArticlesResponse,
    requestSerialize: serialize_blog_GetArticlesRequest,
    requestDeserialize: deserialize_blog_GetArticlesRequest,
    responseSerialize: serialize_blog_GetArticlesResponse,
    responseDeserialize: deserialize_blog_GetArticlesResponse,
  },
};

exports.BlogServiceClient = grpc.makeGenericClientConstructor(BlogServiceService);
