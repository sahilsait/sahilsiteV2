import Link from "next/link";

export default function Header() {
  return (
    <header className="mb-10">
      <h1 className="text-3xl font-bold text-green-400 mb-2">sahil sait</h1>
      <h2 className="text-xl text-fuchsia-400 mb-4">AI/ML Engineer</h2>
      <div>
        <nav className="flex justify-between gap-4 text-cyan-400">
          <div className="flex gap-4">
            <Link href="/" className="text-decoration-line: underline">
              home
            </Link>
            <Link href="projects" className="text-decoration-line: underline">
              projects
            </Link>
            <Link href="/whoami" className="text-decoration-line: underline">
              whoami
            </Link>
          </div>
          <div className="flex gap-4">
            <a
              href="https://github.com/sahilsait"
              title="GitHub"
              target="_blank"
              className="text-yellow-400"
            >
              github
            </a>
            <a
              href="https://twitter.com/sahilsaitn"
              title="X/Twitter"
              target="_blank"
              className="text-yellow-400"
            >
              x/twitter
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
