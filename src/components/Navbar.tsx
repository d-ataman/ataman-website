'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-black shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-white text-xl font-semibold">
            Duygu Ataman
          </div>
          <div className="flex space-x-8">
            <Link href="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-normal">
              Home
            </Link>
            <Link href="/news" className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-normal">
              News
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 