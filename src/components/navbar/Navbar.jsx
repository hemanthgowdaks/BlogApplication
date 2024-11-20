import React from 'react'
import styles from "./navbar.module.css"
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src='/youtube.png' alt='youtube_logo' height={24} width={24} />
        <Image src='/facebook.png' alt='facebook_logo' height={24} width={24} />
        <Image src='/instagram.png' alt='instagram_logo' height={24} width={24} />
        <Image src='/x.png' alt='x_logo' height={30} width={30} />
      </div>
      <div className={styles.logo}>MyBlogSpace</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link href="/" className={styles.link}>Homepage</Link>
        <Link href="/" className={styles.link}>Contact</Link>
        <Link href="/" className={styles.link}>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar