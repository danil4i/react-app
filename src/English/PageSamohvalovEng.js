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
            <Link to="/aboutEng" style={{ textDecoration: 'none', color: 'inherit' }}>
              About Us
            </Link>
          </li>
          <li onClick={handleShowPhone} style={{ cursor: 'pointer', position: 'relative' }}>Contacts
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
          <li>Surgeon-endoscopist</li> 
          <li>PhD in Medical Sciences</li>
          <li>Highest Category - Surgery</li>
          <li>Highest Category - Endoscopy</li>
          <li>Over 25 years of experience</li>
        </ul>
      
      
        <ul className='clinics'>
        <li className='clinique'>Clinics you can contact:</li>
        <li>IMSP Spitalul de Stat: Chisinau, str Drumul viilor 34</li>
        <li>IMSP SCM "Sfinta Treime": Chisinau, str Alecu Ruso 11</li>
        <li>Centrul Medical Excellence: Chisinau, str Grenoble 23</li>
        <li>MedProctOne: Chisinau, str Ginta Latina 12/12</li>
        <li>MedExpert: Orhei, str Mihai Eminescu 10</li>
        <li>GUP "Medical Center 'TiraMed'": Tiraspol, 25 Octombrie 75</li>
        </ul>
      </div>
      
    </header>
  );
}
