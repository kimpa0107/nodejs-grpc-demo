import {
  sendUnaryData,
  ServerUnaryCall,
  UntypedHandleCall,
} from '@grpc/grpc-js';

import { IBlogServiceServer } from '../proto/blog/gen/blog_grpc_pb';
import {
  Article,
  Category,
  Extra,
  GetArticlesRequest,
  GetArticlesResponse,
} from '../proto/blog/gen/blog_pb';

export class BlogServer implements IBlogServiceServer {
  [name: string]: UntypedHandleCall;

  getArticles(
    call: ServerUnaryCall<GetArticlesRequest, GetArticlesResponse>,
    callback: sendUnaryData<GetArticlesResponse>
  ): void {
    const resp = new GetArticlesResponse();
    resp.addItem(mockArticle(1));
    resp.addItem(mockArticle(2));

    const extra = new Extra();
    extra.setPage(call.request.getPage());
    extra.setSize(call.request.getSize());
    extra.setTotal(100);
    resp.setExtra(extra);

    callback(null, resp);
  }
}

function mockArticle(num: number): Article {
  const article = new Article();
  article.setId(`article-${num}`);
  article.setTitle(`Article title - ${num}`);
  article.setCoverImage('');
  article.setTagsList(['tag1', 'tag2']);

  const category = new Category();
  category.setId(1);
  category.setName('Go');
  article.setCategory(category);

  return article;
}
