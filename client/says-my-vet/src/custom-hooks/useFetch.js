import {useState, useEffect} from 'react'


const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);



    //    const url = 'http://localhost:9292/doctors'
    
  
    useEffect(() => {

    const getDocttorsData = async () => {
        const response = await fetch(url)

        // check for error in the response object
        if (!response.ok) {
            setError("Failed to access requested resource")
            // console.log("Failed to access requested resource");
        }
        const data = await response.json()
        setData(data)
        console.log(data)
       setLoading(false);
    }
        getDocttorsData()
    }, [])
    return { data, loading, error } 
}

export default useFetch