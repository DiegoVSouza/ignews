import styles from './styles.module.scss'
import { SingInButton } from '../SingInButton'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="Logo" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a >Posts</a>
                </nav>

                <SingInButton/>
            </div>
        </header>
    )
}