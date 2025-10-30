import { Camera } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 text-2xl font-light tracking-wide text-gray-900 hover:text-gray-600 transition-colors"
        >
          <Camera className="w-6 h-6" />
          <span>chestiuni</span>
        </a>

        <a
          href="/blog"
          className="px-6 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
        >
          Blog
        </a>
      </nav>
    </header>
  );
}
