import React from 'react' 
import {MdCatchingPokemon} from 'react-icons/md'
import {SiPokemon} from 'react-icons/si'
import style from './home.module.css'

export default function Home() {
  return (
    <>
      <div className={style.home}>
        <header>
            <div className={style.flexContainer}>
              <MdCatchingPokemon size={30} className={style.icon}/>
              <span>PokeCard</span>
            </div>
        </header>
              <SiPokemon  className={style.iconPoke}/>
      </div>
    </>
  )
}
