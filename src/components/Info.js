import React, { useState } from 'react';
import { AiFillInfoCircle } from "react-icons/ai";

export default function Info() {
  
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
      <h1 className='delaem'>Спектр услуг:</h1>
      <ul className='procedure'>
        <li onClick={toggleLaparoscopy} style={{ cursor: 'pointer' }}>
          Лапароскопические операции
        </li>
        {showLaparoscopy && (
          <div>
            <p className='laparoscopy'>
              <b>Гепатобилиарная система:</b>
              <ul>
                <li>Лапароскопическая холецистэктомия</li>
                <li>Лапароскопическая холедохотомия, литэкстракция</li>
                <li>Лапароскопическая резекция кисты печени</li>
                <li>Лапароскопическая резекция кисты селезенки</li>
              </ul>
              <b>Поджелудочная железа:</b>
              <ul>
                <li>Лапароскопическая кистэктомия поджелудочной железы</li>
              </ul>
              <b>Пищевод, Желудок и 12-перстная кишка:</b>
              <ul>
                <li>Лапароскопическая фундопластика при грыжах пищевода, рефлюксе.</li>
              </ul>
              <b>Кишечник:</b>
              <ul>
                <li>Лапароскопическая аппендэктомия</li>
              </ul>
              <b>Урология:</b>
              <ul>
                <li>Лапароскопическая венэктомия при варикоцеле</li>
                <li>Лапароскопическая дренирование кисты почек</li>
                <li>Лапароскопическая нефрэктомия</li>
              </ul>
              <b>Гинекология:</b>
              <ul>
                <li>Лапароскопическая кистэктомия яичников</li>
                <li>Лапароскопическая резекция яичников при поликистозе</li>
                <li>Лапароскопическая сальпингонеопластика при бесплодии</li>
                <li>Лапароскопическая сальпингэктомия, аднексэктомия</li>
                <li>Лапароскопическая миомэктомия</li>
                <li>Лапароскопическая перевязка маточных труб (стерилизация)</li>
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
          Миниинвазивные хирургические вмешательства под эндоскопическим, УЗИ и рентген контролем
        </li>
        {showMinimallyInvasive && (
          <div>
            <p className='minimallyInvasive'>
              <b>Органы брюшной полости, брюшная стенка:</b>
              <ul>
                <li>Диагностическая Видеогастроскопия</li>
                <li>Эндоскопическая остановка кровотечений из верхних отделов ЖКТ</li>
                <li>Эндоскопическое извлечение инородных тел из ЖКТ</li>
                <li>Эндоскопическая баллонная дилатация стриктур и стенозов</li>
                <li>Эндоскопическое лигирование или склерозирование вен пищевода</li>
                <li>Эндоскопическое местное лечение сложных язв ЖКТ</li>
                <li>Эндоскопическое удаление новообразований из ЖКТ</li>
              </ul>
              <b>Гепатопанкреатобилиарная система:</b>
              <ul>
                <li>Эндоскопическая ретроградная холангиопанкреатография</li>
                <li>Эндоскопическая папиллосфинктеротомия</li>
                <li>Эндоскопическая вирсунготомия</li>
                <li>Эндоскопическое дренирование желчных протоков</li>
                <li>Эндоскопическое протезирование желчного и панкреатического протока</li>
              </ul>
              <b>Толстая кишка:</b>
              <ul>
                <li>Диагностическая Видеоколоноскопия</li>
                <li>Эндоскопическая полипэктомия новообразований толстого кишечника</li>
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
          Перкутанные вмешательства под УЗИ и Рентген контролем
        </li>
        {showPercutaneous && (
          <div>
            <p className='percutaneous'>
              <ul>
                <li>Диагностическая пункция органов грудной клетки, брюшной полости, забрюшинного пространства</li>
                <li>Перкутанная холангиография</li>
                <li>Чрезкожное дренирование и протезирование желчных протоков</li>
                <li>Чрезкожное дренирование и протезирование мочевыводящих путей</li>
                <li>Чрезкожная декомпрессия при остром почечном блоке</li>
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
          УЗИ диагностика
        </li>
        {showUltrasound && (
          <div>
            <p className='ultrasound'>
              <ul>
                <li>УЗИ диагностика щитовидной железы</li>
                <li>УЗИ диагностика органов брюшной полости</li>
                <li>УЗИ диагностика почек, мочевого пузыря</li>
                <li>УЗИ диагностика простаты</li>
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
          Общая хирургия
        </li>
        {showGeneralSurgery && (
          <div>
            <p className='generalSurgery'>
              <ul>
                <li>Аппендэктомия</li>
                <li>Грыжесечение и пластика грыж брюшной полости</li>
                <li>Грыжесечение и пластика паховых грыж</li>
                <li>Удаление липом, атером, папиллом и других новообразований</li>
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
          Проктология
        </li>
        {showProctology && (
          <div>
            <p className='proctology'>
              <ul>
                <li>Геморроидэктомия</li>
                <li>Иссечение параректальных свищей</li>
                <li>Иссечение анальной трещины</li>
                <li>Иссечение копчиковых кист</li>
                <li>Вскрытие и дренирование острых парапроктитов</li>
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
          Сосудистая хирургия
        </li>
        {showVascularSurgery && (
          <div>
            <p className='vascularSurgery'>
              <ul>
                <li>Оперативное лечение варикозно расширенных вен нижних конечностей</li>
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
