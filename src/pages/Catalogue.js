import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from 'react-router-dom';

import NavbarOther from '../components/NavbarOther';
import SearchFilters from '../components/SearchFilters';
import CatalogueItems from '../components/CatalogueItems';

import "bootstrap/dist/css/bootstrap.min.css";

function Catalogue() {
    return (
        <div className="Catalogue">
            <header className="App-header">
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Rubik+Mono+One"></link>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Overpass"></link>

                <NavbarOther />
            </header>

            <div style={{marginLeft: "10%", marginRight: "10%"}}>
                <SearchFilters />
            
                <div style={{gap: '25px', marginTop: '5%', marginLeft: '25%', marginRight: '25%', display: 'flex', flexWrap: 'wrap'}}>
                    <CatalogueItems />
                </div>

                <Link to='/checkout'><Button id={"checkoutButton"} disabled={true} className='bg-dark' style={{width: '100%', marginTop: '5%'}}>Checkout</Button></Link>
            </div>
        </div>
    );
}
  
export default Catalogue;