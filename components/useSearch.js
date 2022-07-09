import { useState } from "react";

useState
const useSearch = (data ) => {
    // input filter for search keyword

    const [keyword, setKeyword] = useState('');
    const [result, setResult] = useState(data);

    const handleSearch = (keyword) => {
        if(keyword !==""){
        setKeyword(keyword);
        const temp = result.filter(item => {
            return item.title.toLowerCase().includes(keyword);
        });
        setResult(temp);
        }else{
            setKeyword('');
            setResult(data);
        }
        
    }
    //search=>keyword // result=>maping // onChange=>handleSearch
    return {result,keyword,handleSearch};
    
}

export default useSearch;