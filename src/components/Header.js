import React from 'react';

function Header(){
  return(
    <header>
      <img src="https://i.imgur.com/KDIDiSE.png" alt="Facebook"/>
      <div className="side-right">
        <span>Meu perfil</span>
        <i className="material-icons">account_circle</i>
      </div>
    </header>
  )
}

export default Header;