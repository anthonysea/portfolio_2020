import Head from 'next/head';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

import { IoMdSunny, IoIosMoon } from 'react-icons/io'

import styles from './Layout.module.css';

export default function Layout({ children, props }) {
    const { dark, setDark } = useContext(ThemeContext)

    return (
        <div className={`${dark ? styles.dark : styles.light} wrapper`}>
            <div className={ styles.themeToggle } onClick={() => setDark(!dark)}>
                { dark ? 
                <IoIosMoon color="white"/> :
                <IoMdSunny/>}
            </div>
            <div className="container mx-auto flex flex-col">
                <Head>
                    <title>Anthony Chao</title>
                </Head> 


                { children }
            </div>
        </div>
    )  
}