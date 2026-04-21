export type VibeStatus = "planned" | "in-progress" | "shipped";

export interface VibeIdea {
  id: string;
  title: string;
  titleEn: string;
  summary: string;
  stack: string[];
  status: VibeStatus;
  repoUrl?: string;
  priority?: boolean;
}

export const vibeCodingIdeas: VibeIdea[] = [
  {
    id: "github-knowledge-pool",
    title: "GitHub ナレッジプール",
    titleEn: "GitHub Knowledge Pool",
    summary:
      "YouTube / Web 記事の URL を GitHub Issue に貼るだけで、GitHub Actions が字幕・本文を取得し Gemini で日本語要約、タグ付き Markdown として private リポジトリに自動 commit・Issue クローズまで行う個人用ナレッジ基盤。スマホからでも投下できて GitHub の全文検索で横断的に引ける。",
    stack: [
      "GitHub Actions",
      "Gemini 2.5 Flash",
      "TypeScript",
      "Readability",
      "YouTube Transcript",
    ],
    status: "shipped",
    priority: true,
  },
  {
    id: "dev-log-article",
    title: "開発ログ → 記事下書き生成",
    titleEn: "Dev Log → Article Draft Generator",
    summary:
      "git log と diff を解析し、LLM が Zenn / Qiita 向けの技術記事の下書きを自動生成。執筆の腰の重さを解消し、アウトプット頻度を上げる開発者向けパイプライン。",
    stack: ["Node.js", "LLM API", "GitHub Actions", "Zenn CLI"],
    status: "planned",
  },
  {
    id: "portfolio-auto-updater",
    title: "ポートフォリオ自動更新エージェント",
    titleEn: "Portfolio Auto-Updater Agent",
    summary:
      "自分の GitHub リポジトリの README を定期クロールし、このポートフォリオの projects.ts を更新する PR を自動作成。プロダクトが増えても人手メンテ不要にする自己更新型サイト。",
    stack: ["GitHub API", "LLM API", "Next.js", "GitHub Actions"],
    status: "planned",
  },
  {
    id: "voice-memo-task",
    title: "音声メモ → タスク化パイプライン",
    titleEn: "Voice Memo → Task Pipeline",
    summary:
      "iPhone で録音した音声を Whisper で文字起こし、LLM が意図を構造化して GitHub Issue / Reminders に自動登録。歩きながら思いついたアイデアを取りこぼさないための個人用ワークフロー。",
    stack: ["Whisper", "LLM API", "iOS Shortcuts", "GitHub API"],
    status: "planned",
  },
  {
    id: "receipt-ocr-stock",
    title: "レシート OCR → うちストック連携",
    titleEn: "Receipt OCR → Home Inventory Sync",
    summary:
      "買い物後のレシートを撮影するだけで、Vision LLM が商品名・数量を抽出し既存の「うちストック」DB を自動更新。家庭内の在庫管理を手入力ゼロに。",
    stack: ["Vision LLM", "Rails API", "Next.js", "Cloud Storage"],
    status: "planned",
  },
  {
    id: "screenshot-ui-cli",
    title: "スクショ → UI コード変換 CLI",
    titleEn: "Screenshot → UI Code CLI",
    summary:
      "UI のスクリーンショットを投げると SwiftUI / React のコンポーネントコードを生成してくれる CLI ツール。デザインからの実装着手時間を短縮するバイブコーディング特化ユーティリティ。",
    stack: ["Vision LLM", "Node.js CLI", "SwiftUI", "React"],
    status: "planned",
  },
  {
    id: "ai-pr-reviewer",
    title: "AI PR レビュアー",
    titleEn: "AI PR Reviewer",
    summary:
      "自リポジトリに導入する GitHub Action 型の AI レビュアー。差分を読み取り、バグの懸念点・命名・設計の観点でコメント。個人開発でも第二の目を確保するための仕組み。",
    stack: ["GitHub Actions", "LLM API", "TypeScript", "Octokit"],
    status: "planned",
  },
];
