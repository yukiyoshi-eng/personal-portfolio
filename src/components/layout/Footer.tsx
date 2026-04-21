import GitHubIcon from "@/components/icons/GitHubIcon";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border-glass)] py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--text-secondary)]">
          © {new Date().getFullYear()} Yukiyoshi Sakaguchi
        </p>
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/sakaguchiyukiyoshi"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--text-secondary)] hover:text-[#a78bfa] transition-colors"
            aria-label="GitHub"
          >
            <GitHubIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
