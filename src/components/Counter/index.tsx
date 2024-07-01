'use client';

import React from 'react';

import { useCountStore } from '@/store/counter';

import styles from './count.module.scss';

const Index = () => {
    const { count, increment, decrement } = useCountStore();
    return (
        <div>
            <h2 className={styles.title}>{count}</h2>
            <button
                onClick={() => increment(1)}
                className={styles.button}
            >
                数量加
            </button>
            <button
                onClick={() => decrement(1)}
                className={`${styles.button} ml-2`}
            >
                数量减
            </button>
        </div>
    );
};

export default Index;
