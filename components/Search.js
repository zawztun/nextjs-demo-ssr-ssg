import useSearch from "./useSearch";

const Search = () =>{
    const {result,handleSearch,keyword} = useSearch();
    return(
        <div className="search">     
    <form className={styles.search}>
        <input type = "text" className={styles.searchTerm} onChange = {handleChange} value = {search} />
    </form>
        </div>
    )   
}

export default Search;

