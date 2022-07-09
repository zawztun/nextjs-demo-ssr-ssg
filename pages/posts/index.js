
import styles from '../../styles/Home.module.css'
import Link from 'next/link';

export const getStaticProps = async() =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return{
        props:{posts: data}
    }
};

const posts = ({posts}) => {
    
    return (  
        <div>
        <div className={styles.main}>
        
            {posts.map(post=>(
                <Link href = {'/posts/'+ post.id} key = {post.id}>
                    <a >
                        <div className={styles}>
                            <div className={styles.card}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                            </div>
                        </div>
                        
                    </a>
                    
                </Link>
            ))}
        </div>
        </div>
    );
}
 
export default posts;