import Link from "next/link";

export default function Home() {
  return (
    <div class="min-h-screen bg-gray-900 text-gray-300 p-8 md:p-16 font-mono">
      <div class="max-w-4xl mx-auto">
        <header class="mb-8">
          <h1 class="text-3xl font-bold text-green-400 mb-2">sahil sait</h1>
          <h2 class="text-xl text-purple-400 mb-4">
            machine learning/security systems engineer
          </h2>
          <div>
            <nav class="flex justify-between gap-4 text-blue-300">
              <div class="flex gap-4">
                <Link href="/" className="hover:underline">
                  home
                </Link>
                <Link href="projects" className="hover:underline">
                  projects
                </Link>
                <Link href="whoami" className="hover:underline">
                  whoami
                </Link>
              </div>
              <div class="flex gap-4">
                <a
                  href="https://github.com/sahilsait"
                  title="GitHub"
                  target="_blank"
                >
                  github
                </a>
                <a
                  href="https://twitter.com/sahilsaitn"
                  title="X/Twitter"
                  target="_blank"
                >
                  x/twitter
                </a>
              </div>
            </nav>
          </div>
        </header>
        <main></main>
      </div>
    </div>
  );
}
