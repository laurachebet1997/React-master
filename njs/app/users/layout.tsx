import styles from "./styles.module.css"
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Users Page',
  description: 'Created by Laura',
}

export default function AboutLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
          <nav>usersnav</nav>
          <main className={styles.main}>
            {children}
          </main>
        </>
    )
  }