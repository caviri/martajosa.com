import { Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex items-center space-x-6">
            <a
              href="https://www.instagram.com/marta_josa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-medium">Instagram</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Marta Josa Bordell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
