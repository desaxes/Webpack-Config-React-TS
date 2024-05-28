import { useState } from 'react'
import styles from './App.module.scss'
import { Outlet, useNavigate } from 'react-router-dom'
export const App = () => {
    const [count, setCount] = useState(0)
    const link = useNavigate()
    return (
        <>
            <div className={styles.header}>
                <button onClick={() => link('/about')} className={styles.button}>ABOUT</button>
                <button onClick={() => link('/shop')} className={styles.button}>SHOP</button>
            </div>
            <Outlet></Outlet>
            <div className={styles.btn_panel}>
                <button className={styles.button} onClick={() => setCount(e => e - 1)}><span>-</span></button>
                <button className={styles.button} onClick={() => setCount(e => e + 1)}><span>+</span></button>
            </div >
            <div style={{ fontSize: 50, fontWeight: 'bold', margin: '20px', textAlign: 'center' }}>{count}</div>
        </>
    )
}