import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className="">HELLO</h1>
      <Link href="/about">about</Link>
      <Link href="/users">users</Link>
    </main>
  )
}
