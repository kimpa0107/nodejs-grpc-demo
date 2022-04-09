import {
  GetArticlesRequest,
  GetArticlesResponse,
} from '../proto/blog/gen/blog_pb';
import { client } from './utils';

export default function getArticles() {
  return new Promise<GetArticlesResponse>((resolve, reject) => {
    const req = new GetArticlesRequest();
    req.setPage(1);
    req.setSize(10);

    client.getArticles(req, (err, resp) => {
      if (err) {
        reject(err);
        return;
      }
      resolve(resp);
    });
  });
}
