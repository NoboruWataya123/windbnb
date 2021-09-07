import styles from './Header.module.css';
import {HeaderProps} from './Header.props';
import Image from 'next/image';
import Modal from '../Modal/Modal';
import { useState } from 'react';

export default function Header({children}: HeaderProps): JSX.Element {
    

    return (
        <div className={styles.container}>
            {children}
        </div>
    )
}




