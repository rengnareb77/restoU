import React from 'react';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Ru from './components/Ru';

const Home = () => {
    
    return (
        <div>
            <Header></Header>
            <h1>Accueil</h1>
            <Ru></Ru>
            <Footer></Footer>
        </div>
    );
};

export default Home;