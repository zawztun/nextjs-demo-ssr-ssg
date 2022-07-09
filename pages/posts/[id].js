import Link from "next/link";
import styles from '../../styles/Home.module.css'


export const getStaticPaths = async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
     const data = await res.json();
 
     const paths = data.map(post=>{
         return {
             params:{id:post.id.toString()}
         }
     })
     
     return {
         paths, 
         fallback:false
     }
 }
 export const getStaticProps = async(context)=>{
     const id = context.params.id;
       const res = await fetch('https://jsonplaceholder.typicode.com/posts/' +id);
       const data = await res.json();
 
       return{
           props:{post:data}
       }
 
 }
 
 const Details = ({post}) => {
     return ( 
         <div>
             <h1>{post.title}</h1>
             <p>{post.body}</p>
             <p>{post.id}</p>
             <Link href = "/"><a className= {styles.btn}>Home</a></Link> 
         </div>
      );
 }
  
 export default Details;