import React, { useState } from 'react';
import { AiTwotoneMedicineBox } from "react-icons/ai";
import { Link } from 'react-router-dom';  // Import Link from react-router-dom

export default function Header() {
  const [showPhone, setShowPhone] = useState(false);

  const handleShowPhone = () => {
    setShowPhone(prevShowPhone => !prevShowPhone);
  };

  const [showCabinet, setShowCabinet] = useState(false);

  const handleShowCabinet = () => {
    setShowCabinet(prevShowCabinet => !prevShowCabinet);
  };

  return (
    <header>
      <div>
        
        <ul className='nav'>
          <li>
            {/* Add a Link to the About Page */}
            <Link to="/aboutRo" style={{ textDecoration: 'none', color: 'inherit' }}>
              Despre noi
            </Link>
          </li>
          <li onClick={handleShowPhone} style={{ cursor: 'pointer', position: 'relative' }}>Contacte
            {showPhone && (
              <a 
                href="tel:=+37369260893" 
                className='phone-number' 
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '0',
                  display: 'block',
                  backgroundColor: 'white',
                  padding: '5px',
                  borderRadius: '5px',
                  boxShadow: '0 0 5px rgba(0,0,0,0.3)'
                }}
              >
                +37369260893
              </a>
            )}
          </li>
        </ul>
      </div>
     
      <div className='presentation'></div>
      <div>
        <ul className='doctor'>
          <li>Chirurg-endoscopist</li> 
          <li>Doctor în științe medicale</li>
          <li>Cea mai înaltă categorie - Chirurgie</li>
          <li>Cea mai înaltă categorie - Endoscopie</li>
          <li>Peste 25 de ani de experiență</li>
        </ul>
      
      
        <ul className='clinics'>
        <li className='clinique'>Clinici la care vă puteți adresa:</li>
        <li>IMSP Spitalul de Stat: Chișinău, str Drumul viilor 34</li>
        <li>IMSP SCM "Sfinta Treime": Chișinău, str Alecu Ruso 11</li>
        <li>Centrul Medical Excellence: Chișinău, str Grenoble 23</li>
        <li>MedProctOne: Chișinău, str Ginta Latina 12/12</li>
        <li>MedExpert: Orhei, str Mihai Eminescu 10</li>
        <li>GUP "Centrul Medical 'TiraMed'": Tiraspol, 25 Octombrie 75</li>
        </ul>
      </div>
      
    </header>
  );
}
