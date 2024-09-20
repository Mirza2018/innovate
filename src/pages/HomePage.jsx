
import FirstMiddleBanner from '@/components/Banner/FirstMiddleBanner';
import TopBanner from '@/components/Banner/TopBanner';
import Card from '@/components/Card/Card';
import OverView from '@/components/Overview/OverView';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <TopBanner/>
            <FirstMiddleBanner/>
            <OverView/>
            <Card/>
    

        </div>
    );
};

export default HomePage;