import styles from './Ball.module.css'

type Props = {}

export default function Ball({ }: Props) {
    return (
        <div className={styles.Ball}>
            <div className={styles.Messi}>
                Messi
            </div>
            <div>
                vs.
            </div>
            <div className={styles.Ronaldo}>
                Ronaldo
            </div>
        </div>

    )
}