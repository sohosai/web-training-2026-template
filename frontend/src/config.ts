// API リクエスト先のホスト。
// 既定では空文字（Vite の dev サーバの /api プロキシをそのまま利用）。
// 環境変数 VITE_API_HOST が設定されていればそちらを優先する。
// 例: "https://api.example.com"
export const API_HOST = import.meta.env.VITE_API_HOST ?? "";

/** API のエンドポイント URL を組み立てる。 */
export const apiUrl = (path: string): string => `${API_HOST}${path}`;
