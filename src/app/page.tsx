import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-32">
      <h1 className="text-4xl font-bold mb-4">Welcome to My Blog</h1>
      <p className="text-sm text-gray-600 mb-16">技術、生活、旅行、読書について発信しています</p>
      
      <nav className="w-full">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8">
          <Link href="/blog/tech" className="text-xl font-medium text-gray-700 hover:text-gray-900">Tech</Link>
          <Link href="/blog/life" className="text-xl font-medium text-gray-700 hover:text-gray-900">Life</Link>
          <Link href="/blog/travel" className="text-xl font-medium text-gray-700 hover:text-gray-900">Travel</Link>
          <Link href="/blog/books" className="text-xl font-medium text-gray-700 hover:text-gray-900">Books</Link>
        </div>
      </nav>
    </main>
  );
}
