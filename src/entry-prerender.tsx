// 只在 build 時使用：把每個頁面先輸出成 HTML，讓搜尋引擎與 AI 不執行 JavaScript 也讀得到內容。
// 瀏覽器實際載入的仍是 main.tsx，畫面與互動完全不變。
import { renderToString } from 'react-dom/server';
import App from './App.tsx';
import type { PageId } from './types';

export function render(page: PageId): string {
  return renderToString(<App initialPage={page} />);
}
