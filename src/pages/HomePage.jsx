
import TopBanner from '@/components/Banner/TopBanner';
import Card from '@/components/Card/Card';
import Feature from '@/components/Feature/Feature';
import OverView from '@/components/Overview/OverView';
import React from 'react';

const HomePage = () => {
    return (
        <div>
            <TopBanner/>
            <Feature/>
            <OverView/>
            <Card/>
    

        </div>
    );
};

export default HomePage;