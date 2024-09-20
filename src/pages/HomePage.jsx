
import FirstMiddleBanner from '@/components/Banner/FirstMiddleBanner';
import TopBanner from '@/components/Banner/TopBanner';
import OverView from '@/components/Overview/OverView';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <TopBanner/>
            <FirstMiddleBanner/>
            <OverView/>
    

        </div>
    );
};

export default HomePage;