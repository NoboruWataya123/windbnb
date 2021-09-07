import styles from './Item.module.css';
import {ItemProps} from './Item.props';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Item({...props}): JSX.Element {
    const { id, photo, title, type, rating } = props.data;

    return (
        <>
            <div key={id} className={styles.card}>
                <div className={styles.image}>
                <Image className={styles.photo} src={photo} width={500} height={300} alt='photo'/>
                </div>
                <div className={styles.desc}><div className={styles.type}>{type}</div><div className={styles.rating}>{rating}⭐</div></div>
                <div className={styles.info}>{title}</div>
            </div>
        
        </>
    )
}
