import {useState, useEffect} from 'react'


const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);



    //    const url = 'http://localhost:9292/doctors'
    
  
    useEffect(() => {

    const getDocttorsData = async () => {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
       setLoading(false);
    }
        getDocttorsData()
    }, [])
    return { data, loading } 
}

export default useFetch