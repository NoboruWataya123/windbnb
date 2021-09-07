import styles from './Modal.module.css';
import { ModalProps } from './Modal.props';
import { useState, useEffect } from 'react';

export default function Modal({visible, setVisible}: ModalProps): JSX.Element {
    const [adults, setAdults] = useState(1)
    const [kids, setKids] = useState(0)
    const [total, setTotal] = useState('')

    function increment() {
        setAdults(adults + 1)
    }

    function decrement() {
        setAdults(Math.max(0, adults - 1))
    }

    function incrementKids() {
        setKids(kids + 1)
    }

    function decrementKids() {
        setKids(Math.max(0, kids - 1))
    }

    function calculateTotal() {
        setTotal(`${adults + kids}`)
    }

    const rootClasses = [styles.modal]
    if (visible) {
        rootClasses.push(styles.active)
    }

    useEffect(() => {
        calculateTotal()
        return () => {
            setTotal('')
        }
    }, [adults, kids])

    return (
        <div className={rootClasses.join(' ')}>
            <div className={styles.container} onClick={(e) => e.stopPropagation()}>
                <div className={styles.location}>
                    <input className={styles.location__input} type="text" placeholder="Add location" />
                </div>
                <div className={styles.guest}>
                    <input className={styles.guest__input} type="text" placeholder={total} />
                    <button className={styles.search__button} onClick={() => setVisible(false)}>🔍 Search</button>
                </div>
            </div>
            <div className={styles.description}>
                <div className={styles.desc__search_container}>
                    <ul className={styles.search_desc__list}>
                        <li className={styles.search_desc__list_item}>Helsinki, Finland</li>
                        <li className={styles.search_desc__list_item}>Turku, Finland</li>
                        <li className={styles.search_desc__list_item}>Oulu, Finland</li>
                        <li className={styles.search_desc__list_item}>Vaasa, Finland</li>
                    </ul>
                </div>
                <div className={styles.guest_desc}>
                    <div className={styles.guest_desc_adults}>
                        Adults
                    <br />
                    <span className={styles.guest_desc_info}>Ages 13 or above</span> 
                        <div className={styles.desc__btn}>
                                <button className={styles.button} onClick={() => decrement()}>-</button>
                                <span className={styles.result}>{adults}</span>
                                <button className={styles.button} onClick={() => increment()}>+</button>
                        </div>
                    </div>
                        <div className={styles.guest_desc_kids}>
                            Children
                        <br />
                        <span className={styles.guest_desc_info}>Ages 2-12</span> 
                            <div className={styles.desc__btn}>
                                <button className={styles.button} onClick={() => decrementKids()}>-</button>
                                <span className={styles.result}>{kids}</span>
                                <button className={styles.button} onClick={() => incrementKids()}>+</button>
                            </div>
                        </div>       
                </div>
            </div>
        </div>
    )
}
