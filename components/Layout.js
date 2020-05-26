import Head from 'next/head';
import { ThemeProvider } from '../context/ThemeContext';
import ThemeContext from '../context/ThemeContext';
import { useContext } from 'react';

import styles from './Layout.module.css';

export default function Layout({ children, props }) {
    const { dark } = useContext(ThemeContext)

    return (
        <div className={`${dark ? styles.dark : styles.light} wrapper`}>
            <div className="container mx-auto flex flex-col">
                <Head>
                    <title>Anthony Chao</title>
                </Head>
    
                { children }
            </div>
        </div>
    )  
}