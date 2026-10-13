import styles from './Card.module.css'
type Props = {}

export default function Card({ }: Props) {
    return (
        <div className={styles.card}>
            <h2>Kaisekampe</h2>
            <img src="https://picsum.photos/200/300" alt="Hero" />
            <p>made in china</p>
        </div>
    )
}