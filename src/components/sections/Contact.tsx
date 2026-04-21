import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { Mail } from "lucide-react";
import GitHubIcon from "@/components/icons/GitHubIcon";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <SectionHeading
          title="Contact"
          subtitle="お気軽にご連絡ください"
        />

        <ScrollReveal delay={0.1}>
          <div className="glass-card rounded-2xl p-10 mt-4">
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
              プロジェクトについてのご質問や、コラボレーションのご提案など、
              いつでもお気軽にメッセージください。
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:your.email@example.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#3b82f6] text-white text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-[rgba(139,92,246,0.3)]"
              >
                <Mail size={16} />
                メールを送る
              </a>
              <a
                href="https://github.com/sakaguchiyukiyoshi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-[var(--text-primary)] text-sm font-semibold hover:border-[#8b5cf6] transition-colors"
              >
                <GitHubIcon size={16} />
                GitHub
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
