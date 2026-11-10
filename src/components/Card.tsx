import { useState } from 'react';
import styles from './Card.module.css'
type Props = {
    title: String,
    text: String,
    img: String
}

export default function Card({ title, text, img }: Props) {
    const [counter, setcounter] = useState(0);
    const [random, setrandom] = useState(Math.random());

    const link: string = img + "?id=" + random;

    return (
        <div className={styles.card} onClick={() => {
            let newValue = counter + 1
            setcounter(newValue);

        }}>
            <h2>{title}</h2>
            <img src={link} alt="Hero" />
            <p>{text}</p>
            <div>Amount of clicks {counter}</div>
            <button onClick={() => {
                setrandom(Math.random())
            }}>Change Image</button>
        </div>
    )
}