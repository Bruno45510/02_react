import styles from './Card.module.css'
type Props = {
    title: String,
    text: String,
    img: String
}

export default function Card({ title, text, img }: Props) {
    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <img src={img} alt="Hero" />
            <p>{text}</p>
        </div>
    )
}