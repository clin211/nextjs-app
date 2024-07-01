import Counter from '@/components/Counter';

import styles from '@/assets/styles/home.module.scss';

export default function Home() {
    const DB_HOST = process.env.DB_HOST;
    return (
        <main className={`${styles.container} p-24`}>
            <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
                <p className={styles.title}>this is title</p>
                <h6 className='text-xl text-black'>环境变量：{DB_HOST}</h6>
            </div>
            <Counter />
        </main>
    );
}
