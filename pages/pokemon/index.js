/* eslint-disable @next/next/no-img-element */

import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export const getStaticProps = async() =>{
    const res = await fetch("https://jherr-pokemon.s3.us-west-1.amazonaws.com/index.json");
    const data = await res.json();
    return{
        props:{pokemon: data}
    }
};

const pokemon = ({pokemon}) => {
    
    return (  
        <div>
        <div className={styles.main}>
        
        {pokemon.map((pokemon) => (
          <div className={styles.card} key={pokemon.id}>
            <Link href={`/pokemon/${pokemon.id}`}>
              <a>
                <img
                  src={`https://jherr-pokemon.s3.us-west-1.amazonaws.com/${pokemon.image}`}
                  alt={pokemon.name}
                  width={200}
                  height={200}
                />
                <h3>{pokemon.name}</h3>
              </a>
            </Link>
          </div>
        ))}
        </div>
        </div>
    );
}
 
export default pokemon;