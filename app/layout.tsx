import './css/globals.css'
import type {Metadata} from 'next'
import localFont from 'next/font/local'

const vgaFont = localFont({src: './fonts/ModernDOS8x16.ttf'})

export const metadata: Metadata = {
    title: '░',
    applicationName: '░',
    icons: '░'
}

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body className={vgaFont.className}>{children}</body>
        </html>
    )
}
