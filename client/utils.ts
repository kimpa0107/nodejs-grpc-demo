import { BlogServiceClient } from '../proto/blog/gen/blog_grpc_pb';
import { credentials } from '@grpc/grpc-js';

const port = 3000;

export const client = new BlogServiceClient(
  `localhost:${port}`,
  credentials.createInsecure()
);

export const noop = () => {};
