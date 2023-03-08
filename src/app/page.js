import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import base_style from './base.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main className={styles.main}>
      <Image
        src="/pickomeHome.png"
        alt="Pickome"
        fill
        sizes="100vw"
        style={{
          objectFit: 'cover',
        }}
      />
    </main>
  )
}
