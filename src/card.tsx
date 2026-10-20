import styles from './Card.module.css'
type Props = {
    title: String,
    text: String,
    img: String
}

export default function Card({ title, text, img }: Props) {
    const random = Math.random();
    const link: string = img + "?id=" + random;
    console.log(link);


    return (
        <div className={styles.card}>
            <h2>{title}</h2>
            <img src={link} alt="Hero" />
            <p>{text}</p>
            <div>{random}</div>
            <p>{link}</p>
        </div>
    )
}