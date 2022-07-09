import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSearch from '../components/useSearch'


const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li> <Link href = "/posts"><a> Posts</a></Link> </li>
            <li><Link href = "/pokemon"><a> Pokemon</a></Link> </li>
        </ul>
    </div>
  )
}

export default Navbar