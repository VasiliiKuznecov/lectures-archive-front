import classNames from 'classnames';
import React, { useCallback, useRef, useState, useMemo } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';

import { Lecture } from '../../types/lectures';
import Button from '../Button';
import LectureCard from '../LectureCard';

import styles from './LecturesCarousel.module.css';

type Props = {
    lectures: Readonly<Lecture[]>;
}

const LecturesCarousel: React.FC<Props> = (props) => {
    const slider = useRef<Slider | null>(null);
    const [isPrevDisabled, setIsPrevDisabled] = useState(true);
    const [isNextDisabled, setIsNextDisabled] = useState(true);

    const onPrev = useCallback(() => {
        if (!slider.current) {
            return;
        }

        slider.current.slickPrev();
    }, []);

    const onNext = useCallback(() => {
        if (!slider.current) {
            return;
        }

        slider.current.slickNext();
    }, []);

    const FakePrevArrow = useMemo(() => {
        return (props: CustomArrowProps) => {
            setIsPrevDisabled(Boolean(props.className?.includes('slick-disabled')));

            return null;
        };
    }, []);
    const FakeNextArrow = useMemo(() => {
        return (props: CustomArrowProps) => {
            setIsNextDisabled(Boolean(props.className?.includes('slick-disabled')));

            return null;
        };
    }, []);

    return <section className={styles.wrapper}>
        <Slider
            ref={slider}
            slidesToShow={4}
            slidesToScroll={4}
            draggable={false}
            infinite={false}
            responsive={
                [
                    {
                        breakpoint: 1860,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    },
                    {
                        breakpoint: 1430,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 1010,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            }
            prevArrow={<FakePrevArrow />}
            nextArrow={<FakeNextArrow />}
        >
            {props.lectures.map(lecture => <LectureCard className={styles.element} lecture={lecture} key={lecture.id} />)}
        </Slider>
        <Button
            className={classNames(styles['arrow-control'], styles.prev, isPrevDisabled && styles.disabled)}
            onClick={onPrev}
        >
            <div className={styles.arrow} />
        </Button>
        <Button
            className={classNames(styles['arrow-control'], styles.next, isNextDisabled && styles.disabled)}
            onClick={onNext}
        >
            <div className={styles.arrow} />
        </Button>
    </section>;
};

export default LecturesCarousel;