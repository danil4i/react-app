
import React, { useState } from 'react';
import { AiTwotoneMedicineBox } from "react-icons/ai";
import { Link } from 'react-router-dom';

export default function HeaderRom() {
  const [showPhone, setShowPhone] = useState(false)

  const handleShowPhone = () => {
    setShowPhone(!showPhone)
  }

  return (
    <header>
      <div>
        <Link to="/romania"> <button className='russian'>Romana </button>  </Link> <Link to='/'><button className='romana'>Русский</button></Link> <Link to='/english'><button className='english'>English</button></Link>
        <ul className='nav'>
          <li>
            
          <Link to='/aboutRo' style={{ textDecoration: 'none', color: 'inherit' }}>
              Despre noi
           </Link>   
          </li>
          <li onClick={handleShowPhone} style={{ cursor: 'pointer', position: 'relative' }}>
            Contacte
            {showPhone && (
              <a 
                href="tel:+37369260893" 
                className='phone-number' 
                style={{
                  position: 'absolute',
                  top: '20px',
                  left: '0',
                  display: 'block',
                  backgroundColor: 'white',
                  padding: '5px',
                  borderRadius: '5px',
                  boxShadow: '0 0 5px rgba(0,0,0,0.3)',
                }}
              >
                +37369260893
              </a>
            )}
           
          </li>
        </ul>
      </div>
      <div className='serghei'>
        <h1>Serghei Samohvalov</h1>

      </div>
      <div className='presentation'></div>
    </header>
  );
}
