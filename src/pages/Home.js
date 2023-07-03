import { Text } from 'react-native';

import NavbarHome from '../components/NavbarHome';

import logopizzabanner from '../img/logo-pizza-banner.png';
import cheesefrenzybanner from '../img/cheesefrenzybanner.png';
import porkdetroitbanner from '../img/porkdetroitbanner.png';
import greenieflatbreadsbanner from '../img/greenieflatbreadsbanner.png';
import newyorkstylebanner from '../img/newyorkstylebanner.png';
import stuffedcrustbanner from '../img/stuffedcrustbanner.png';
import linktocataloguebanner from '../img/linktocataloguebanner.png';
import storeimage from '../img/storeimage.png';
import tonyimage from '../img/tonyimage.png';

function Home() {
    return (
        <div className="Home">
            <header className="App-header">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>
            <link rel="text/css" href='./components/NavbarHome.css'></link>

            <img style={{width: '100%', height: '600px'}} src={logopizzabanner} alt=""></img>
            <NavbarHome />
            </header>

            <div style={{marginLeft: "10%", marginRight: "10%"}}>
                {/* Row 1 */}
                <div style={{marginTop: '3%', height: '700px'}}>
                <img style={{width: '69%', height: '100%', marginRight: '1%'}} src={cheesefrenzybanner} alt=""></img>
                <img style={{width: '30%', height: '100%'}} src={porkdetroitbanner} alt=""></img>
                </div>

                {/* Row 2 */}
                <img style={{marginTop: '3%', width: '100%', height: '50%'}} src={newyorkstylebanner} alt=""></img>

                <div style={{marginTop: '1%', height: '450px'}}>
                <img style={{width: '59%', marginRight: '1%', height: '100%'}} src={greenieflatbreadsbanner} alt=""></img>
                <img style={{width: '40%', height: '100%'}} src={stuffedcrustbanner} alt=""></img>
                </div>

                {/* Catalogue */}
                <img style={{marginTop: '3%', width: '100%', height: '50%'}} src={linktocataloguebanner} alt=""></img>

                {/* Contact Us */}
                <div id="contactus" className="shadow mb-5" style={{marginTop: '3%', display: 'flex', height: '400px'}}>
                <img style={{marginRight: '5%', height: '100%'}} src={storeimage} alt=""></img>
                <Text style={{fontFamily: "Overpass", fontSize: '20px', paddingTop: '30px'}}>
                    <b>631 Saquoi Rd, Ottawa, ON</b>
                    <b>{'\n'}{'\n'}Open</b>
                    <p>Mon - Fri</p>
                    <p>8AM - 6PM</p>
                    {'\n'}
                    <b>Contact Us</b>
                    <p>+1-800-323-2323</p>
                    <p>help@tonyspizza.com</p>
                </Text>
                </div>

                {/* About Us */}
                <div id="aboutus" className="shadow mb-5" style={{display: 'flex', marginTop: '3%', height: '600px'}}>
                <Text style={{fontFamily: "Overpass", paddingLeft: '30px', paddingTop: '30px', marginRight: '5%', fontSize: '32px'}}>
                    <b>We’re an Ottawa pizza store that serves our community with locally and freshly made food.</b>

                    <b>{'\n'}{'\n'}Who’s Tony?</b>
                    <p>Founded in 2005 by Tony Rossi, his pizza has served as the benchmark for Ottawans and Ontarians alike! Tony was born in Sicily, Italy. He has over 50 years experience making pizzas with an original Italian recipe.</p>

                    <b>{'\n'}The Best of the Best</b>
                    <p>We have a consistent source of ingredients. Our supplier is a family-owned farm in rural Italy. They are PKEB-certified for clean, GMO-free crops.</p>
                </Text>
                
                <img style={{height: '100%'}} src={tonyimage} alt=""></img>
                </div>
            </div>
        </div>
    );
}
  
export default Home;