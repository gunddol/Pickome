import './globals.css'
import base_style from './base.css'

export const metadata = {
  title: 'PickomeComingSoon',
  description: 'Pickome service is coming soon',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {children};
    </html>
  )
}
