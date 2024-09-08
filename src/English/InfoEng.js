import React, { useState } from 'react';
import { AiFillInfoCircle } from "react-icons/ai";

export default function InfoEng() {

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
      <h1 className='delaem'>Spectrum of medical services:</h1>
      <ul className='procedure'>
        <li onClick={toggleLaparoscopy} style={{ cursor: 'pointer' }}>
          Laparoscopic surgeries
        </li>
        {showLaparoscopy && (
          <div>
            <p className='laparoscopy'>
              <b>Hepatobiliary system:</b>
              <ul>
                <li>Laparoscopic cholecystectomy</li>
                <li>Laparoscopic choledochotomy, stone extraction</li>
                <li>Laparoscopic resection of liver cysts</li>
                <li>Laparoscopic resection of spleen cysts</li>
              </ul>
              <b>Pancreas:</b>
              <ul>
                <li>Laparoscopic cystectomy of the pancreas</li>
              </ul>
              <b>Esophagus, stomach, and duodenum:</b>
              <ul>
                <li>Laparoscopic fundoplication for esophageal hernias, reflux</li>
              </ul>
              <b>Intestines:</b>
              <ul>
                <li>Laparoscopic appendectomy</li>
              </ul>
              <b>Urology:</b>
              <ul>
                <li>Laparoscopic venelectomy for varicocele</li>
                <li>Laparoscopic drainage of kidney cysts</li>
                <li>Laparoscopic nephrectomy</li>
              </ul>
              <b>Gynecology:</b>
              <ul>
                <li>Laparoscopic ovarian cystectomy</li>
                <li>Laparoscopic ovarian resection for polycystosis</li>
                <li>Laparoscopic salpingoneoplasty for infertility</li>
                <li>Laparoscopic salpingectomy, annexectomy</li>
                <li>Laparoscopic myomectomy</li>
                <li>Laparoscopic tubal ligation (sterilization)</li>
              </ul>
            </p>
            <li onClick={toggleLaparoscopyExtra} style={{ cursor: 'pointer' }}>
              Additional information about laparoscopic surgeries
            </li>
            {showLaparoscopyExtra && (
              <p className='laparoscopy-extra'>
                Here you can add extra information about laparoscopic surgeries.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleMinimallyInvasive} style={{ cursor: 'pointer' }}>
          Minimally invasive surgeries under endoscopic, ultrasound, and radiological control
        </li>
        {showMinimallyInvasive && (
          <div>
            <p className='minimallyInvasive'>
              <b>Abdominal organs, abdominal wall:</b>
              <ul>
                <li>Diagnostic video-gastroscopy</li>
                <li>Endoscopic hemostasis for upper digestive tract bleeding</li>
                <li>Endoscopic foreign body removal from the digestive tract</li>
                <li>Balloon dilation of strictures and stenoses</li>
                <li>Endoscopic ligation or sclerotherapy of esophageal veins</li>
                <li>Endoscopic treatment of complex ulcers of the digestive tract</li>
                <li>Endoscopic removal of tumors from the digestive tract</li>
              </ul>
              <b>Hepatopancreatobiliary system:</b>
              <ul>
                <li>Endoscopic retrograde cholangiopancreatography (ERCP)</li>
                <li>Endoscopic papillotomy</li>
                <li>Endoscopic wirsungotomy</li>
                <li>Endoscopic drainage of bile ducts</li>
                <li>Endoscopic stenting of the bile and pancreatic ducts</li>
              </ul>
              <b>Colon:</b>
              <ul>
                <li>Diagnostic video-colonoscopy</li>
                <li>Endoscopic polypectomy of colon tumors</li>
              </ul>
            </p>
            <li onClick={toggleMinimallyInvasiveExtra} style={{ cursor: 'pointer' }}>
              Additional information about minimally invasive procedures
            </li>
            {showMinimallyInvasiveExtra && (
              <p className='minimallyInvasive-extra'>
                Here you can add extra information about minimally invasive procedures.
              </p>
            )}
          </div>
        )}

        <li onClick={togglePercutaneous} style={{ cursor: 'pointer' }}>
          Percutaneous interventions under ultrasound and radiological control
        </li>
        {showPercutaneous && (
          <div>
            <p className='percutaneous'>
              <ul>
                <li>Diagnostic puncture of chest, abdominal organs, and retroperitoneal space</li>
                <li>Percutaneous cholangiography</li>
                <li>Percutaneous drainage and stenting of bile ducts</li>
                <li>Percutaneous drainage and stenting of urinary tracts</li>
                <li>Percutaneous decompression for acute renal obstruction</li>
              </ul>
            </p>
            <li onClick={togglePercutaneousExtra} style={{ cursor: 'pointer' }}>
              Additional information about percutaneous interventions
            </li>
            {showPercutaneousExtra && (
              <p className='percutaneous-extra'>
                Here you can add extra information about percutaneous interventions.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleUltrasound} style={{ cursor: 'pointer' }}>
          Ultrasound diagnostics
        </li>
        {showUltrasound && (
          <div>
            <p className='ultrasound'>
              <ul>
                <li>Thyroid ultrasound</li>
                <li>Abdominal ultrasound</li>
                <li>Kidney and bladder ultrasound</li>
                <li>Prostate ultrasound</li>
              </ul>
            </p>
            <li onClick={toggleUltrasoundExtra} style={{ cursor: 'pointer' }}>
              Additional information about ultrasound diagnostics
            </li>
            {showUltrasoundExtra && (
              <p className='ultrasound-extra'>
                Here you can add extra information about ultrasound diagnostics.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleGeneralSurgery} style={{ cursor: 'pointer' }}>
          General surgery
        </li>
        {showGeneralSurgery && (
          <div>
            <p className='generalSurgery'>
              <ul>
                <li>Repair of hernias</li>
                <li>Surgical treatment of wounds, suppurative conditions, abscesses</li>
              </ul>
            </p>
            <li onClick={toggleGeneralSurgeryExtra} style={{ cursor: 'pointer' }}>
              Additional information about general surgery
            </li>
            {showGeneralSurgeryExtra && (
              <p className='generalSurgery-extra'>
                Here you can add extra information about general surgery.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleProctology} style={{ cursor: 'pointer' }}>
          Proctology
        </li>
        {showProctology && (
          <div>
            <p className='proctology'>
              <ul>
                <li>Surgical treatment of hemorrhoids, anal fissures, fistulas</li>
                <li>Endoscopic treatment of rectal tumors</li>
              </ul>
            </p>
            <li onClick={toggleProctologyExtra} style={{ cursor: 'pointer' }}>
              Additional information about proctology
            </li>
            {showProctologyExtra && (
              <p className='proctology-extra'>
                Here you can add extra information about proctology.
              </p>
            )}
          </div>
        )}

        <li onClick={toggleVascularSurgery} style={{ cursor: 'pointer' }}>
          Vascular surgery
        </li>
        {showVascularSurgery && (
          <div>
            <p className='vascularSurgery'>
              <ul>
                <li>Endovascular stenting of the aorta and iliac arteries</li>
                <li>Endovascular stenting of renal arteries</li>
                <li>Endovascular stenting of lower limb arteries</li>
                <li>Endovenous laser treatment of varicose veins</li>
              </ul>
            </p>
            <li onClick={toggleVascularSurgeryExtra} style={{ cursor: 'pointer' }}>
              Additional information about vascular surgery
            </li>
            {showVascularSurgeryExtra && (
              <p className='vascularSurgery-extra'>
                Here you can add extra information about vascular surgery.
              </p>
            )}
          </div>
        )}
      </ul>
    </div>
  );
}
