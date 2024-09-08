import React, { useState } from 'react';
import { AiFillInfoCircle } from "react-icons/ai";

export default function InfoRom() {
  
  const [showLaparoscopy, setShowLaparoscopy] = useState(false);
  const [showMinimallyInvasive, setShowMinimallyInvasive] = useState(false);
  const [showPercutaneous, setShowPercutaneous] = useState(false);
  const [showUltrasound, setShowUltrasound] = useState(false);
  const [showGeneralSurgery, setShowGeneralSurgery] = useState(false);
  const [showProctology, setShowProctology] = useState(false);
  const [showVascularSurgery, setShowVascularSurgery] = useState(false);

  
  const [showLaparoscopyExtra, setShowLaparoscopyExtra] = useState(false);
  const [showMinimallyInvasiveExtra, setShowMinimallyInvasiveExtra] = useState(false);
  const [showPercutaneousExtra, setShowPercutaneousExtra] = useState(false);
  const [showUltrasoundExtra, setShowUltrasoundExtra] = useState(false);
  const [showGeneralSurgeryExtra, setShowGeneralSurgeryExtra] = useState(false);
  const [showProctologyExtra, setShowProctologyExtra] = useState(false);
  const [showVascularSurgeryExtra, setShowVascularSurgeryExtra] = useState(false);


  const toggleLaparoscopy = () => setShowLaparoscopy(!showLaparoscopy);
  const toggleMinimallyInvasive = () => setShowMinimallyInvasive(!showMinimallyInvasive);
  const togglePercutaneous = () => setShowPercutaneous(!showPercutaneous);
  const toggleUltrasound = () => setShowUltrasound(!showUltrasound);
  const toggleGeneralSurgery = () => setShowGeneralSurgery(!showGeneralSurgery);
  const toggleProctology = () => setShowProctology(!showProctology);
  const toggleVascularSurgery = () => setShowVascularSurgery(!showVascularSurgery);

  
  
  const toggleLaparoscopyExtra = () => setShowLaparoscopyExtra(!showLaparoscopyExtra);
  const toggleMinimallyInvasiveExtra = () => setShowMinimallyInvasiveExtra(!showMinimallyInvasiveExtra);
  const togglePercutaneousExtra = () => setShowPercutaneousExtra(!showPercutaneousExtra);
  const toggleUltrasoundExtra = () => setShowUltrasoundExtra(!showUltrasoundExtra);
  const toggleGeneralSurgeryExtra = () => setShowGeneralSurgeryExtra(!showGeneralSurgeryExtra);
  const toggleProctologyExtra = () => setShowProctologyExtra(!showProctologyExtra);
  const toggleVascularSurgeryExtra = () => setShowVascularSurgeryExtra(!showVascularSurgeryExtra);

  return (
    <div>
      <h1 className='delaem'>Spectrul serviciilor:</h1>
      <ul className='procedure'>
        <li onClick={toggleLaparoscopy} style={{ cursor: 'pointer' }}>
        Operațiile laparoscopice
        </li>
        {showLaparoscopy && (
          <div>
            <p className='laparoscopy'>
              <b>Sistemul hepatobiliar:</b>
              <ul>
                <li>Colecistectomie laparoscopică</li>
                <li>Coledocotomie laparoscopică, extracția calculilor</li>
                <li>Rezecție laparoscopică a chistului hepatic</li>
                <li>Rezecție laparoscopică a chistului splenic</li>
              </ul>
              <b>Pancreas:</b>
              <ul>
                <li>Chistectomie laparoscopică a pancreasului</li>
              </ul>
              <b>Esofag, stomac și duoden:</b>
              <ul>
                <li>Fundoplastie laparoscopică pentru hernii esofagiene, reflux gastric</li>
              </ul>
              <b>Intestin:</b>
              <ul>
                <li>Apendicectomie laparoscopică
                </li>
              </ul>
              <b>Urologie:</b>
              <ul>
                <li>Venectomie laparoscopică pentru varicocel</li>
                <li>Drenajul laparoscopic al chistului renal</li>
                <li>Nefrectomie laparoscopică</li>
              </ul>
              <b>Ginecologie:</b>
              <ul>
                <li>Chistectomie laparoscopică a ovarelor</li>
                <li>Rezecție laparoscopică a ovarelor pentru polichistoză</li>
                <li>Salpingoneoplastie laparoscopică pentru infertilitate</li>
                <li>Salpingectomie laparoscopică, anexectomie</li>
                <li>Miomectomie laparoscopică
                </li>
                <li>Ligaturarea laparoscopică a trompelor uterine (sterilizare)</li>
              </ul>
            </p>
            <li onClick={toggleLaparoscopyExtra} style={{ cursor: 'pointer' }}>
              Дополнительная информация о лапароскопических операциях
            </li>
            {showLaparoscopyExtra && (
              <p className='laparoscopy-extra'>
                Здесь можно добавить дополнительную информацию о лапароскопических операциях.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleMinimallyInvasive} style={{ cursor: 'pointer' }}>
        Intervențiile chirurgicale minim invazive sub controlul endoscopic, ecografic și radiologic
        </li>
        {showMinimallyInvasive && (
          <div>
            <p className='minimallyInvasive'>
              <b>Organele abdominale, peretele abdominal:</b>
              <ul>
                <li>Videogastroscopie diagnostică</li>
                <li>Hemostază endoscopică a hemoragiilor din tractul digestiv superior
                </li>
                <li>Extracția endoscopică a corpurilor străine din tractul digestiv</li>
                <li>Dilatarea endoscopică cu balon a stricturilor și stenozei</li>
                <li>Ligaturarea endoscopică sau scleroterapia a venelor esofagiene</li>
                <li>Tratamentul endoscopic local pentru ulcerele complexe ale tractului digestiv</li>
                <li>Îndepărtarea endoscopică a tumorilor din tractul digestiv</li>
              </ul>
              <b>Sistemul hepatopancreatobiliar:</b>
              <ul>
                <li>Colangiopancreatografie endoscopică retrogradă (ERCP)
                </li>
                <li>Papilosfincterotomie endoscopică</li>
                <li>Wirsungotomie endoscopică</li>
                <li>Drenajul endoscopic al canalelor biliare</li>
                <li>Protezare endoscopică a canalului biliar și pancreatic</li>
              </ul>
              <b>Colon:</b>
              <ul>
                <li>Videocolonoscopie diagnostică</li>
                <li>Polipectomie endoscopică a tumorilor colonului</li>
              </ul>
            </p>
            <li onClick={toggleMinimallyInvasiveExtra} style={{ cursor: 'pointer' }}>
              Дополнительная информация о миниинвазивных вмешательствах
            </li>
            {showMinimallyInvasiveExtra && (
              <p className='minimallyInvasive-extra'>
                Здесь можно добавить дополнительную информацию о миниинвазивных вмешательствах.
              </p>
            )}
          </div>
        )}

        <li onClick={togglePercutaneous} style={{ cursor: 'pointer' }}>
        Intervenții percutane sub controlul ecografic și radiologic
        </li>
        {showPercutaneous && (
          <div>
            <p className='percutaneous'>
              <ul>
                <li>Puncția diagnostică a organelor cavității toracice, abdominale, spațiului retroperitoneal</li>
                <li>Colangiografie percutanată</li>
                <li>Drenajul și protezare percutană a canalelor biliare</li>
                <li>Drenajul și protezare percutană a căilor urinare</li>
                <li>Decompresie percutană în blocajul renal acut</li>
              </ul>
            </p>
            <li onClick={togglePercutaneousExtra} style={{ cursor: 'pointer' }}>
              Дополнительная информация о перкутанных вмешательствах
            </li>
            {showPercutaneousExtra && (
              <p className='percutaneous-extra'>
                Здесь можно добавить дополнительную информацию о перкутанных вмешательствах.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleUltrasound} style={{ cursor: 'pointer' }}>
        Diagnosticare ecografică
        </li>
        {showUltrasound && (
          <div>
            <p className='ultrasound'>
              <ul>
                <li>Ecografie tiroidiană</li>
                <li>Ecografie abdominală</li>
                <li>Ecografie renală și vezicală</li>
                <li>Ecografie prostatică</li>
              </ul>
            </p>
            <li onClick={toggleUltrasoundExtra} style={{ cursor: 'pointer' }}>
              Дополнительная информация о УЗИ диагностике
            </li>
            {showUltrasoundExtra && (
              <p className='ultrasound-extra'>
                Здесь можно добавить дополнительную информацию о УЗИ диагностике.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleGeneralSurgery} style={{ cursor: 'pointer' }}>
        Chirurgie generală
        </li>
        {showGeneralSurgery && (
          <div>
            <p className='generalSurgery'>
              <ul>
                <li>Apendicectomie</li>
                <li>Herniotomie și repararea herniilor abdominale</li>
                <li>Herniotomie și repararea herniilor inghinale</li>
                <li>Îndepărtarea lipoamelor, ateroamelor, papiloamelor și altor formațiuni</li>
              </ul>
            </p>
            <li onClick={toggleGeneralSurgeryExtra} style={{ cursor: 'pointer' }}>
              Дополнительная информация о общей хирургии
            </li>
            {showGeneralSurgeryExtra && (
              <p className='generalSurgery-extra'>
                Здесь можно добавить дополнительную информацию о общей хирургии.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleProctology} style={{ cursor: 'pointer' }}>
        Proctologie
        </li>
        {showProctology && (
          <div>
            <p className='proctology'>
              <ul>
                <li>Hemoroidectomie</li>
                <li>Excizia fistulelor pararectale</li>
                <li>Excizia fisurilor anale</li>
                <li>Excizia chisturilor coccigiene
                </li>
                <li>Incizie și drenajul paraproctitelor acute</li>
              </ul>
            </p>
            <li onClick={toggleProctologyExtra} style={{ cursor: 'pointer' }}>
              Дополнительная информация о проктологии
            </li>
            {showProctologyExtra && (
              <p className='proctology-extra'>
                Здесь можно добавить дополнительную информацию о проктологии.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleVascularSurgery} style={{ cursor: 'pointer' }}>
        Chirurgie vasculară
        </li>
        {showVascularSurgery && (
          <div>
            <p className='vascularSurgery'>
              <ul>
                <li>Tratament chirurgical al venelor varicoase ale membrelor inferioare</li>
              </ul>
            </p>
            <li onClick={toggleVascularSurgeryExtra} style={{ cursor: 'pointer' }}>
              Дополнительная информация о сосудистой хирургии
            </li>
            {showVascularSurgeryExtra && (
              <p className='vascularSurgery-extra'>
                Здесь можно добавить дополнительную информацию о сосудистой хирургии.
              </p>
            )}
          </div>
        )}
      </ul>
    </div>
  );
}
