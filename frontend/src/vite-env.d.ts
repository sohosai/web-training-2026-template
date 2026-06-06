/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** API リクエスト先のホスト（例: "https://api.example.com"）。未設定なら同一オリジン。 */
  readonly VITE_API_HOST?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
