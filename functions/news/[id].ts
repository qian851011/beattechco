// /news/<id>：有預先輸出的文章頁就直接回傳；
// 若是上次 build 之後才公開的文章（例如排程文章到期），改回傳最新消息頁，
// 瀏覽器載入後會依網址自動打開該篇文章，避免出現 404。

interface Ctx {
  request: Request;
  next: () => Promise<Response>;
  env: { ASSETS: { fetch: (input: Request | string) => Promise<Response> } };
}

export const onRequestGet = async ({ request, next, env }: Ctx): Promise<Response> => {
  const res = await next();
  if (res.status !== 404) return res;

  const url = new URL(request.url);
  url.pathname = '/news';
  url.search = '';
  const page = await env.ASSETS.fetch(new Request(url.toString(), { headers: request.headers }));
  if (!page.ok) return res;

  const headers = new Headers(page.headers);
  headers.set('Cache-Control', 'public, max-age=300');
  return new Response(page.body, { status: 200, headers });
};
