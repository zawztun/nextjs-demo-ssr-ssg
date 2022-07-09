import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import useSearch from '../components/useSearch'


export const getStaticProps = async() =>{
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return{
      props:{posts: data}
  }
};

export default function Home({posts}) {
  const { result, handleSearch,keyword} = useSearch(posts);
    console.log(result);
  return (
    <>
    <Head>
      <title>Zawtun | Home </title>
      <meta name="keywords" content="posts"/>
    </Head>
    <div>
    <Link href = "/"><h1 className= {styles.header}>Hello Next</h1></Link> 
    
     <form className={styles.search}>
        <input type = "text" className={styles.searchTerm} onChange = {(e)=>handleSearch(e.target.value)} value = {keyword} />
    </form>
         <div className={styles.main}>
         {result.slice(0,9).map(posts=>(
                <Link href = {'/posts/'+ posts.id} key = {posts.id}>
                    <a >
                        <div className={styles}>
                            <div className={styles.card}>
                            <h3>{posts.title}</h3>
                            <p>{posts.body}</p>
                            </div>
                        </div>
                        
                    </a>
                    
                </Link>
            ))}
         </div>
     <div>
        <Link href = "/posts"><a className= {styles.btn}> Posts</a></Link> 
     </div>
     
    </div>  
    </>
  )
  }



