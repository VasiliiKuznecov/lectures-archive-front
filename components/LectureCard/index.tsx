import * as React from "react";
import Shiitake from 'shiitake';
import { Lecture } from '../../types/lectures';
import styles from "./LectureCard.module.css";


type Props = {
    lecture: Lecture;
}

const LectureCard: React.FC<Props> = ({ lecture }) => {
    return <article className={styles.wrapper}>
        <div className={styles.previewPic} style={{ backgroundImage: `url(${lecture.previewImageUrl})` }}>
            {lecture.video?.duration &&
                <span className={styles.duration}>{lecture.video?.duration}</span>
            }
        </div>
        <Shiitake lines={2} className={styles.lectureName} tagName="div">{lecture.name}</Shiitake>
        <div className={styles.lector}>{lecture.lector.name}</div>
    </article>;
};

export default LectureCard;