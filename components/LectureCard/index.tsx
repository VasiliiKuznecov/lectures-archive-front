import * as React from "react";
import Shiitake from 'shiitake';
import classNames from 'classnames';

import { Lecture } from '../../types/lectures';

import styles from "./LectureCard.module.css";

type Props = {
    lecture: Lecture;
    className?: string;
}

const LectureCard: React.FC<Props> = ({ lecture, className }) => {
    return <article className={classNames(styles.wrapper, className)}>
        <div className={styles.previewPic} style={{ backgroundImage: `url(${lecture.previewImageUrl})` }} />
        <Shiitake lines={2} className={styles.lectureName} tagName="div">{lecture.name}</Shiitake>
        <div>{lecture.lector.name}</div>
    </article>;
};

export default LectureCard;