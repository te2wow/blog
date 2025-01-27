import Link from "next/link";

export default function Blog() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">カテゴリー</h2>
          <div className="space-y-4">
            <Link href="/blog/tech" className="block text-lg text-gray-700 hover:text-gray-900">Tech</Link>
            <Link href="/blog/life" className="block text-lg text-gray-700 hover:text-gray-900">Life</Link>
            <Link href="/blog/travel" className="block text-lg text-gray-700 hover:text-gray-900">Travel</Link>
            <Link href="/blog/books" className="block text-lg text-gray-700 hover:text-gray-900">Books</Link>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">最新の投稿</h2>
          <p className="text-gray-600">記事は準備中です...</p>
        </div>
      </div>
    </main>
  );
} 