import React from 'react';
import Banner from '../Banner/Banner';
import GuidingBanner from '../Banner/GuidingBanner/GuidingBanner';
import PromisesBanner from '../PromisesBanner/PromisesBanner';
import SecretBlog from '../SecretBlog/SecretBlog';
import UpComing from '../UpComing/UpComing';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecretBlog></SecretBlog>
            <PromisesBanner></PromisesBanner>
            <UpComing></UpComing>
            <GuidingBanner></GuidingBanner>

        </div>
    );
};

export default Home;