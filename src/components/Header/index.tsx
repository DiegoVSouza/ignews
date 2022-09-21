import styles from './styles.module.scss'
import { SingInButton } from '../SingInButton'
import { ActiveLink } from '../ActiveLink'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo" />
                <nav>
                    <ActiveLink activeClass={styles.active} href='/'><a  >Home</a></ActiveLink>
                    <ActiveLink activeClass={styles.active} href='/posts'><a >Posts</a></ActiveLink>
                </nav>

                <SingInButton />
            </div>
        </header>
    )
}