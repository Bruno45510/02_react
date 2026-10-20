import styles from './Button.module.css'

type Props = {
    img: String
}

export default function Button({ img }: Props) {
    const random = Math.random();
    const link: string = img + "?" + random;

    return (
        <div className={styles.button}>
            <img src={link} alt="" />
        </div >
    )
}