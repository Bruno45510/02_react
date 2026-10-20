import styles from './Ball.module.css'

type Props = {
    title: String,
    texte: String
}

export default function Ball({ title, texte }: Props) {
    return (
        <div className={styles.Ball}>
            <div className={styles.Messi}>
                {title}
            </div>
            <div>
                vs.
            </div>
            <div className={styles.Ronaldo}>
                {texte}
            </div>
        </div>

    )
}