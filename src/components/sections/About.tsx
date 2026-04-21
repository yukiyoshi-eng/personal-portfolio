import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

const skillGroups = [
  {
    label: "Languages",
    skills: ["TypeScript", "Python", "Swift", "Ruby"],
  },
  {
    label: "Frontend / Mobile",
    skills: ["Next.js", "React", "Tailwind CSS", "SwiftUI"],
  },
  {
    label: "Backend / Infra",
    skills: ["Ruby on Rails", "PostgreSQL", "Docker", "Vercel"],
  },
  {
    label: "Other",
    skills: ["PyTorch", "Git", "XcodeGen", "Recharts"],
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="About"
          subtitle="エンジニアとしての歩みとスキルセット"
        />

        <div className="grid md:grid-cols-2 gap-12 mt-12">
          {/* Bio */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-lg font-bold mb-4 gradient-text">自己紹介</h3>
              <div className="space-y-4 text-sm text-[var(--text-secondary)] leading-relaxed">
                <p>
                  Web・iOS・機械学習まで幅広い領域で個人プロダクトを開発しているエンジニアです。
                  実用性を重視したアプリ開発と、技術的な探求を楽しんでいます。
                </p>
                <p>
                  フルスタックでは Next.js + Rails の構成、iOS では SwiftUI を主軸に開発を行っています。
                  また、PyTorch を用いた機械学習フレームワークの自作にも取り組んでいます。
                </p>
                <p>
                  日常の課題をテクノロジーで解決することを目指し、
                  勤怠管理・在庫管理・ヘルスケアなど生活に密着したアプリを手がけています。
                </p>
                <p>
                  近年は Claude Code / Cursor などの AI エージェントを相棒にした
                  "バイブコーディング" を実践し、仕様の言語化から実装・自動化まで
                  AI と共に開発するスタイルで個人プロダクトを加速させています。
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Skills */}
          <div className="space-y-5">
            {skillGroups.map((group, i) => (
              <ScrollReveal key={group.label} delay={0.1 + i * 0.08}>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--text-secondary)] mb-2">
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-[var(--bg-glass)] border border-[var(--border-glass)] text-[var(--text-primary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
