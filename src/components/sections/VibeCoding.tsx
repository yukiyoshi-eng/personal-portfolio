"use client";

import { motion } from "framer-motion";
import { Sparkles, Repeat, Rocket } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SkillBadge from "@/components/ui/SkillBadge";

const tools = [
  "Claude Code",
  "Cursor",
  "Codex",
  "ChatGPT",
  "GitHub Actions",
];

const flowSteps = [
  {
    icon: Sparkles,
    title: "Intent",
    body: "作りたい体験をエージェントと対話しながら言語化し、仕様と受入条件に落とし込む。",
  },
  {
    icon: Repeat,
    title: "Iterate",
    body: "小さな PR と実行可能な検証を高速に回し、AI にレビュー・差分提案させながら磨く。",
  },
  {
    icon: Rocket,
    title: "Ship",
    body: "CI / GitHub Actions に AI を組み込み、リリースとナレッジ化まで自動化する。",
  },
];

export default function VibeCoding() {
  return (
    <section id="vibe" className="py-24 px-6 relative overflow-hidden">
      {/* Soft accent blob */}
      <div
        className="blob w-80 h-80 bg-[#a855f7]"
        style={{ top: "15%", right: "-5%", animationDelay: "2s" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeading
          title="Vibe Coding"
          subtitle="AIエージェントと共に開発するスタイル"
        />

        {/* Philosophy + Tools + Flow */}
        <ScrollReveal delay={0.1}>
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-3 space-y-4">
                <h3 className="text-lg font-bold gradient-text">
                  AI エージェントを相棒にするバイブコーディング
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Claude Code / Cursor / ChatGPT をペアプログラマとして、
                  思いついた "Vibe" を対話しながらプロダクトに落とし込んでいます。
                  コードを書く量より、何を作るか・どう磨くかを考える時間を増やすのが狙いです。
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  個人開発・業務いずれでも、仕様の言語化 → 実装 → レビュー →
                  ナレッジ化のループに AI を組み込み、自分一人でもチームのような速度で
                  動けることを目指しています。
                </p>
              </div>

              <div className="md:col-span-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-3">
                  Toolbelt
                </p>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <SkillBadge key={tool} name={tool} />
                  ))}
                </div>
              </div>
            </div>

            {/* Flow steps */}
            <div className="grid sm:grid-cols-3 gap-4 mt-10 pt-8 border-t border-[var(--border-glass)]">
              {flowSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="flex flex-col items-start gap-2"
                  >
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br from-[rgba(139,92,246,0.2)] to-[rgba(59,130,246,0.2)] border border-[var(--border-glass)]">
                      <Icon size={16} className="text-[#a78bfa]" />
                    </div>
                    <p className="text-sm font-semibold text-[var(--text-primary)]">
                      {i + 1}. {step.title}
                    </p>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {step.body}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
