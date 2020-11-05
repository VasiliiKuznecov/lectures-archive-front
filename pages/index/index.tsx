import React from 'react';

import LecturesCarousel from '../../components/LecturesCarousel';
import Page from '../../components/Page';
import Title from '../../components/Title';
import { getLectures } from '../../helpers/data';

const Index: React.FC = () => {
    return (
        <Page title="Главная">
            <Title>
                Главная
            </Title>
            <LecturesCarousel lectures={getLectures()} />
        </Page>
    );
};

export default Index;
