import getArticles from './articles';

async function run() {
  const resp = await getArticles();
  const { itemList, extra } = resp.toObject();
  console.log({ itemList, extra });
}

run();
