import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faMedium } from '@fortawesome/free-brands-svg-icons'
import { FaEnvelope } from "@react-icons/all-files/fa/FaEnvelope";
import logo from '../../src/logo2.png'
import Shop from './Shop';

const Main = () => {
 
  const [msg, setMsg] = useState('Shop Merch');

  return (
    <div className='Main'>
      <img className='Main__logo' src={logo} alt="Spice DAO logo" />
      <div className="Main__links">
        <a href="https://forum.spicedao.xyz/">Forum</a>
        <a href="https://snapshot.org/#/dunedao.eth">Governance</a>
        <a href='#0' onClick={() => setMsg('Coming Soon')} >{msg}</a>
      </div>
      <p> <b>Spice DAO </b> is a Web3 production studio publishing sci-fi animation and NFTs from established writers and artists.
      </p>
      <p>The DAO was founded by 800+ pop culture enthusiasts who crowdfunded $12M to win the auction of the Dune Bible at Christie’s Paris in November 2021 for $3M.
      </p>
      <p>We are currently producing an original animated limited series to be distributed by a streaming service and are opening an NFT studio that provides white glove service to high profile creators to develop strategy and concepts; design and build technology products; and advise on marketing campaigns to onboard the next million users to Web3.
      </p>
      <p>The DAO has been featured in The Guardian, The New Yorker, Financial Times, Business Insider, Wired Magazine and more mainstream news outlets. We have a combined following of 10K+ on social media.
      </p>  
      <div className="Main__social_icons">
      <a href="https://twitter.com/spicedao"> { <FontAwesomeIcon icon={ faTwitter } /> } </a>
      <a href="http://discord.gg/SPICEDAO">{ <FontAwesomeIcon icon={ faDiscord } /> }</a>
      <a href="https://medium.com/@spicedao">{ <FontAwesomeIcon icon={ faMedium } /> }</a>
      <a href="mailto:team@spicedao.xyz">< FaEnvelope/></a>
    </div>
    <Shop />
    </div>
  
  )
}

export default Main