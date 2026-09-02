import { Project } from "@/types";
import shinguBousaiImage from "../../public/projects/shingu-bousai.jpg";
import liftLogImage from "../../public/projects/liftlog.jpg";

export const projects: Project[] = [
  {
    id: "shingu-bousai",
    title: "しんぐう防災マップ（非公式）",
    titleEn: "Shingu Disaster Preparedness Map",
    descriptionJa:
      "福岡県新宮町の平時の備えを支援する防災マップ。国土地理院の公式ハザード情報、現在地、避難施設、地点保存を、バックエンドなしの静的Webアプリとして実装。スマートフォン操作と町周辺への地図範囲制限にも対応。",
    descriptionEn:
      "A static disaster preparedness map for Shingu, Fukuoka, combining official hazard layers, geolocation, shelters, and local-only saved places in a mobile-friendly interface.",
    category: "Frontend",
    techs: [
      { name: "React" },
      { name: "TypeScript" },
      { name: "Leaflet" },
      { name: "Vite" },
      { name: "Cloudflare Workers" },
    ],
    demoUrl: "https://shingu-bousai.shingu-bousai.workers.dev",
    imageUrl: shinguBousaiImage,
    featured: true,
  },
  {
    id: "weight-training",
    title: "LiftLog",
    titleEn: "Offline Weight Training Tracker",
    descriptionJa:
      "通信やアカウント登録なしで使える筋トレ記録PWA。74種目の複合検索、RPEなどの用語解説、セット編集、前回記録の再利用、履歴・期間別分析、バックアップをIndexedDB上に実装。",
    descriptionEn:
      "An installable offline-first workout PWA with a 74-exercise catalog, combined filters, contextual training-term help, editable sets, reusable previous workouts, analytics, and local backup.",
    category: "Frontend",
    techs: [
      { name: "Next.js 16" },
      { name: "TypeScript" },
      { name: "Dexie.js" },
      { name: "Recharts" },
      { name: "PWA" },
      { name: "Vitest" },
    ],
    githubUrl: "https://github.com/yukiyoshi-eng/weight-training-app",
    demoUrl: "https://yukiyoshi-eng.github.io/weight-training-app/",
    imageUrl: liftLogImage,
    featured: true,
  },
  {
    id: "pamiq-core",
    title: "pamiq-core",
    titleEn: "pamiq-core",
    descriptionJa:
      "PyTorch を活用した非同期推論・継続学習フレームワーク。制御スレッド・推論スレッド・訓練スレッドを並列化し、Gymnasium 環境との統合や状態の永続化、リモートコンソール制御をサポートするモジュラー設計。",
    descriptionEn:
      "A minimal ML framework for asynchronous inference and continuous learning. Features parallel threads for control, inference, and training with Gymnasium integration and state persistence.",
    category: "ML / AI",
    techs: [
      { name: "Python" },
      { name: "PyTorch" },
      { name: "Gymnasium" },
      { name: "Threading" },
      { name: "MkDocs" },
    ],
    featured: true,
  },
  {
    id: "kintaikanri",
    title: "勤怠管理システム",
    titleEn: "Attendance Management System",
    descriptionJa:
      "GPS 打刻対応の法令準拠勤怠管理システム。通常・フレックス・裁量労働など複数の勤務形態をサポートし、36協定チェックや承認ワークフロー、5年間のデータ保持を実装。",
    descriptionEn:
      "A compliant attendance management system with GPS clock-in/out, flexible work schedules, 36-hour regulation checks, and approval workflows.",
    category: "Full-Stack Web",
    techs: [
      { name: "Next.js 14" },
      { name: "Rails 7" },
      { name: "PostgreSQL" },
      { name: "Docker" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
    ],
    featured: true,
  },
  {
    id: "uchi-stock",
    title: "うちストック",
    titleEn: "Home Inventory App",
    descriptionJa:
      "家庭内の在庫をスマートに管理するウェブアプリ。バーコードスキャン（開発中）・買い物リスト・お知らせボードを備え、家族での在庫共有を実現。",
    descriptionEn:
      "A household inventory management app with barcode scanning, shopping lists, and family sharing features built with Next.js and Rails API.",
    category: "Full-Stack Web",
    techs: [
      { name: "Next.js 15" },
      { name: "Rails API" },
      { name: "TypeScript" },
      { name: "Barcode API" },
    ],
  },
  {
    id: "iphone-apps",
    title: "iPhone アプリ開発",
    titleEn: "iPhone App Development",
    descriptionJa:
      "SwiftUI で構築した複数の iOS アプリ。3D オブジェクトスキャナー（AVFoundation）、カメラ・位置情報・プッシュ通知・生体認証などの iPhone 機能を検証するスターターテンプレートを含む。",
    descriptionEn:
      "Multiple SwiftUI iOS apps including a 3D object scanner using AVFoundation and a feature starter template covering camera, location, push notifications, and biometric auth.",
    category: "iOS / Mobile",
    techs: [
      { name: "SwiftUI" },
      { name: "AVFoundation" },
      { name: "CoreLocation" },
      { name: "Face ID" },
      { name: "XcodeGen" },
    ],
  },
  {
    id: "health-mood",
    title: "体調と気分を管理するアプリ",
    titleEn: "Health & Mood Tracker",
    descriptionJa:
      "日々の体調・気分を記録・可視化する iOS アプリ。SwiftUI と XcodeGen を使い、直感的な UI でライフログを蓄積できる設計。",
    descriptionEn:
      "An iOS app for logging daily health conditions and mood, built with SwiftUI for an intuitive life-logging experience.",
    category: "iOS / Mobile",
    techs: [{ name: "SwiftUI" }, { name: "Xcode" }, { name: "XcodeGen" }],
  },
];
