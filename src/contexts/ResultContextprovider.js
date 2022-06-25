import React,{createContext,useContext,useState} from "react";

const ResultContext = createContext();

const baseurl = 'https://google-search3.p.rapidapi.com/api/v1';

export const ResultContextprovider = ({children})=>{


    const [results , setResults ] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('Kiara Advani');

    const getResults = async (type) =>{
        setIsLoading(true);

        const resp = await fetch(`${baseurl}${type}`,{
            method: 'GET',
            headers:{
                'X-User-Agent': 'desktop',
                'X-Proxy-Location': 'EU',
                'X-RapidAPI-Key': 'e603b7cc65mshe4fc75ef0c00603p1b2521jsn44caa71032b8',
                'X-RapidAPI-Host': 'google-search3.p.rapidapi.com'
  } 
        });

        const data = await resp.json();


        setResults(data)
        // if(type.includes('/news')){
        //     setResults(data.entries)

        // }
        // else if(type.includes('/image'))
        // {
        //     setResults(data.image_results)
        // }
        // else{
        //     setResults(data.results)
        // }
        setIsLoading(false);
        console.log(data)
    }
    return(
       <ResultContext.Provider value={{getResults,results,searchTerm,setSearchTerm,isLoading}}>
        {children}
       </ResultContext.Provider>
    )
 }

 export const useResultContext = () => useContext(ResultContext);