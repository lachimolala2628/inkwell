import React from 'react'

const Footer = () => {
    
    const year = new Date().getFullYear()

    return (
        <footer className="py-5 mt-10 border-t border-border">
            <p className="text-center text-(--text-secondary) text-sm">
                © {year} Inkwell. All rights reserved.
            </p>
        </footer>
    )
}

export default Footer