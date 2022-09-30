import { FaGithub } from 'react-icons/fa'
import styles from './styles.module.scss'
import { FiX } from 'react-icons/fi'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SingInButton() {

    const { data } = useSession()


    return data ? (
        <button
            className={styles.singInButton}
            onClick={() => signOut()}>
            <FaGithub color='#04d361' />
            {data.user.name}
            <FiX color='#737380' className={styles.closeIcon} />
        </button>
    ) : (
        <button
            className={styles.singInButton}
            onClick={() => signIn('github')}
        >
            <FaGithub color='#eba417' />
            Sing in with GitHub
        </button>
    );
}