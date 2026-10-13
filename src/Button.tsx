import styles from './Button.module.css'

type Props = {}

export default function Button({ }: Props) {
    return (
        <div className={styles.button}>
            <img src="https://st.depositphotos.com/1864495/4874/i/950/depositphotos_48742747-stock-photo-trollface-internet-troll-3d-illustration.jpg" alt="" />
        </div >
    )
}