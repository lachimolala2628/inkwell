import React from 'react'
import HeroSection from '@/components/HeroSection'
import BookCard from '@/components/BookCard'
import { getAllBooks } from '@/lib/actions/book.action'
import Search from '@/components/Search';
import Footer from '@/components/Footer';

export const dynamic = 'force-dynamic';

const page = async ({ searchParams }: { searchParams: Promise<{ query?: string }> }) => {

  const { query } = await searchParams;

  const bookResults = await getAllBooks(query);
  const books = bookResults.success ? bookResults.data ?? [] : [];

  return (
    <>
      <main className='wrapper container'>
        <HeroSection />

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 mb-10">
          <h2 className="text-3xl font-serif font-bold text-(--text-primary)">Recent Books</h2>
          <Search />
        </div>

        <div className="library-books-grid">
          {
            books.map((book) => (
              <BookCard key={book._id} title={book.title} author={book.author} coverURL={book.coverURL} slug={book.slug} />
            ))
          }
        </div>
      </main>
      <Footer />
    </>

  )
}

export default page