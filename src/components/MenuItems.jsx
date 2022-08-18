import React, {useState,useContext} from 'react';
import GuildModal from './Modals/GuildModal';
import CypherModal from './Modals/CypherModal';
import {contextApi} from './../pages/_app'


function MenuItems(props, ref) {

  const data = useContext(contextApi);

  const [cypherModal, setCypherModal] = useState(false);
  const [guildModal, setGuildModal] = useState(false);

  const handleCypherModalOpen = () => {
    setCypherModal(true);
  };

  const handleGuildModalOpen = () => {
    setGuildModal(true);
  };


  return (
    <ul className="pt-10">
      <li></li>
      <li onClick={handleCypherModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/restaurant.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Storefront</span>
      </li>
      <CypherModal goDownToMintSection={props.goDownToMintSection} visible={cypherModal} setCypherModal={setCypherModal} />
      <li onClick={handleCypherModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/treasure-map.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Wayfare</span>
      </li>
      <li onClick={handleGuildModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-9 hover:bg-lightGrey`}>
        <img src={`./assets/icons/team-building.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Guilds</span>
      </li>
      <GuildModal goDownToMintSection={props.goDownToMintSection} visible={guildModal} setGuildModal={setGuildModal} />
      <li className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img onClick={()=>{props.goDownToMintSection(data.mintRef.current)}} src={`./assets/icons/user-guide.png`} className='w-6 h-6'/>
        <span onClick={()=>{props.goDownToMintSection(data.mintRef.current)}} className={`${!props.open && 'hidden'} origin-left duration-200`}>Instructables</span>
      </li>
      <li className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img onClick={()=>{props.goDownToRenewables(data.renewRef.current)}} src={`./assets/images/renew2.png`} className='w-6 h-6'/>
        <span onClick={()=>{props.goDownToRenewables(data.renewRef.current)}} className={`${!props.open && 'hidden'} origin-left duration-200`}>Renewables</span>
      </li>
      <li onClick={handleCypherModalOpen} className={`text-gray-300 font-f25 text-sm flex item-center gap-x-4 cursor-pointer p-2 rounded-md mt-2 hover:bg-lightGrey`}>
        <img src={`./assets/icons/explore.png`} className='w-6 h-6'/>
        <span className={`${!props.open && 'hidden'} origin-left duration-200`}>Explore Realms</span>
      </li>
    </ul>
  )
}

export default MenuItems