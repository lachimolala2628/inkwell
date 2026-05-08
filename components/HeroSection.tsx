import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="wrapper pt-10 mb-10 md:mb-16">
            <div className="px-4 sm:px-8 py-12 sm:py-16 md:py-24 flex flex-col items-center text-center gap-6">

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-(--text-primary) tracking-tight">
                    Every book has more to say
                </h1>

                {/* Description */}
                <p className="text-(--text-secondary) text-sm sm:text-base md:text-lg max-w-xs sm:max-w-md md:max-w-xl">
                    Most people read a book once and forget 90% of it. Inkwell lets you have ongoing conversations with any book — so the ideas actually stick.
                </p>

                {/* CTA Button */}
                <Link
                    href="/books/new"
                    className="mt-2 inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg font-medium text-sm sm:text-base bg-white hover:bg-[#E5E5E5] transition-all"
                >
                    <span className="text-(--bg-primary)">Add new book</span>
                </Link>

                {/* Steps */}
                <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-(--text-secondary) text-xs sm:text-sm font-mono mt-2">
                    <span>Upload PDF</span>
                    <span>→</span>
                    <span>AI Processing</span>
                    <span>→</span>
                    <span>Voice Chat</span>
                </div>

            </div>
        </section>
    )
}

export default HeroSection