import React from 'react';
import About from './components/About/About';
import Clients from './components/Clients/Clients';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Portfolio from './components/Portfolio/Portfolio';
import Process from './components/Process/Process';
import Project from './components/Project/Project';
import Services from './components/Services/Services';
import Team from './components/Team/Team';
import Tech from './components/Tech/Tech';

const App = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Clients />
            <Services />
            <Portfolio />
            <About />
            <Tech />
            <Process />
            <Team />
            <Project />
            {/* <Footer /> */}
        </>
    );
};

export default App;