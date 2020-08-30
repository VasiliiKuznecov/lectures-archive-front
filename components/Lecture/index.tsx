import React, { useMemo, useState } from 'react';
import classNames from 'classnames';

import Link from 'next/link';

import { Lecture as LectureType } from '../../types/lectures';

import Button from '../Button';

import styles from './Lecture.module.css';
import LecturesList from '../LecturesList';

type Props = {
    lecture: LectureType;
    onClose?: () => void;
    className?: string;
};

const tabs = [
    {
        id: 'lecture',
        name: 'Лекция'
    },
    {
        id: 'after-lecture',
        name: 'После лекции'
    }
];

const Lecture: React.FC<Props> = ({ lecture, onClose, className }) => {
    const [activeTab, setActiveTab] = useState('lecture');

    const tabComponents = useMemo(() => {
        return tabs.map(tab => (
            <Button
                key={tab.id}
                className={classNames(styles.tab, activeTab == tab.id && styles.active)}
                onClick={() => setActiveTab(tab.id)}
            >
                {tab.name}
            </Button>
        ));
    }, []);

    return (
        <article className={classNames(className, styles.wrapper)}>
            <Button className={styles.cross} onClick={onClose} />
            <header className={styles.tabs}>
                {tabComponents}
            </header>
            <section className={classNames(styles.lecture, activeTab === 'lecture')}>
                <div className={styles['video-container']}>
                    {lecture.video ?
                        <iframe
                            title={`Видео лекции ${lecture.name}`}
                            width="640"
                            height="364"
                            src={lecture.video.url}
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        /> :
                        <div className={styles['no-video']}>
                            <div className={styles['no-video-icon']} />
                            <div className={styles['no-video-text']}>Множество видео этой лекции пусто</div>
                        </div>
                    }
                </div>
                <div className={styles.description}>
                    <div className={styles.section}>
                        <h3 className={styles.title}>{lecture.name}</h3>
                        <div className={styles.text}>{lecture.description}</div>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.title}>{lecture.lector.name}</h3>
                        <div className={styles.text}>{lecture.lector.description}</div>
                    </div>
                </div>
            </section>
            <section className={classNames(styles['after-lecture'], activeTab === 'after-lecture')}>

            </section>
        </article>
    );
};

export default Lecture;