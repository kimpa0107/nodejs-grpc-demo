// package: blog
// file: blog.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as blog_pb from "./blog_pb";

interface IBlogServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getArticles: IBlogServiceService_IGetArticles;
}

interface IBlogServiceService_IGetArticles extends grpc.MethodDefinition<blog_pb.GetArticlesRequest, blog_pb.GetArticlesResponse> {
    path: "/blog.BlogService/GetArticles";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<blog_pb.GetArticlesRequest>;
    requestDeserialize: grpc.deserialize<blog_pb.GetArticlesRequest>;
    responseSerialize: grpc.serialize<blog_pb.GetArticlesResponse>;
    responseDeserialize: grpc.deserialize<blog_pb.GetArticlesResponse>;
}

export const BlogServiceService: IBlogServiceService;

export interface IBlogServiceServer extends grpc.UntypedServiceImplementation {
    getArticles: grpc.handleUnaryCall<blog_pb.GetArticlesRequest, blog_pb.GetArticlesResponse>;
}

export interface IBlogServiceClient {
    getArticles(request: blog_pb.GetArticlesRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.GetArticlesResponse) => void): grpc.ClientUnaryCall;
    getArticles(request: blog_pb.GetArticlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.GetArticlesResponse) => void): grpc.ClientUnaryCall;
    getArticles(request: blog_pb.GetArticlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.GetArticlesResponse) => void): grpc.ClientUnaryCall;
}

export class BlogServiceClient extends grpc.Client implements IBlogServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getArticles(request: blog_pb.GetArticlesRequest, callback: (error: grpc.ServiceError | null, response: blog_pb.GetArticlesResponse) => void): grpc.ClientUnaryCall;
    public getArticles(request: blog_pb.GetArticlesRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: blog_pb.GetArticlesResponse) => void): grpc.ClientUnaryCall;
    public getArticles(request: blog_pb.GetArticlesRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: blog_pb.GetArticlesResponse) => void): grpc.ClientUnaryCall;
}
