import React from 'react';
import Header from '../component/Header';
import Footer from'../component/Footer';
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