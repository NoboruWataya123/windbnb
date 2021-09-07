import styles from './Card.module.css';
import {CardProps} from './Card.props';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Pagination from '../Pagination/Pagination';
import Item from '../Item/Item';

export default function Card({children}: CardProps): JSX.Element {
    const url = '/data.json';
    const [posts, setPosts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(url)
      .then((response) => {
        if (response.ok) return response.json();
        throw new Error('something went wrong while requesting posts');
      })
      .then((posts) => setPosts(posts))
      .catch((error) => setError(error.message));
  }, []);

  if (error) return <h1>{error}</h1>;


    return (
        <div className={styles.wrapper}>
            <h1 className={styles.header}>Stays in Finland</h1>
            {posts.length > 0 ? (
          <Pagination
            data={posts}
            RenderComponent={Item}
            title="Posts"
            pageLimit={3}
            dataLimit={6}
          />
      ) : (
       <h1>No Posts to display</h1>
      )}
        </div>
    )
}