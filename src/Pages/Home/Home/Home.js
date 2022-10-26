import React from 'react';
import Banner from '../Banner/Banner';
import GuidingBanner from '../Banner/GuidingBanner/GuidingBanner';
import SecretBlog from '../SecretBlog/SecretBlog';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SecretBlog></SecretBlog>
            <GuidingBanner></GuidingBanner>

        </div>
    );
};

export default Home;