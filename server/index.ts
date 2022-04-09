import { Server, ServerCredentials } from '@grpc/grpc-js';
import { BlogServiceService } from '../proto/blog/gen/blog_grpc_pb';
import { BlogServer } from './services';

const server = new Server();
server.addService(BlogServiceService, new BlogServer());

const port = 3000;
const uri = `localhost:${port}`;
server.bindAsync(uri, ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    throw err;
  }
  console.log(`Listening on ${uri}`);
  server.start();
});

