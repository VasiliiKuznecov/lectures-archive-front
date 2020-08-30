import * as React from "react";
import { Lecture } from '../../types/lectures';
import styles from "./LecturesList.module.css";
import LectureCard from "../LectureCard";


type Props = {
    lectures: Readonly<Lecture[]>;
}

const LecturesList: React.FC<Props> = (props) => {
    return <section className={styles.wrapper}>
        {props.lectures.map(lecture => <div className={styles.element} key={lecture.id}><LectureCard lecture={lecture} /></div>)}
    </section>;
};

export default LecturesList;