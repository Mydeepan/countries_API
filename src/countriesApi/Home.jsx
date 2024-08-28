import axios from 'axios'
import './style.css'
import React, { useEffect, useState } from 'react'



export const Home = () => {
    const [countryName,setCountryName] = useState('India')
    const [userInput,setUserInput] = useState('AUS')
    const API_COUNTRY = `https://restcountries.com/v3.1/name/${userInput}`
    const [countryCap,setcountryCap] = useState('');
    const [region,setRegion] = useState('');
    const [currentName,setCurrentName] = useState('');
    const [subRegion,setSubRegion] =useState('');
    const [Language,setLanguage] =useState('');
    const [currency,setCurrency] = useState('');
    const [population,setPopulation] = useState('');
    const [flag,setFlag] = useState('');
    const lang =Object.entries(Language).map((item) => item[1]);
    let currencyName=Object.entries(currency).map( cashDetails => cashDetails[1]);
    const [isloading,setLoading] =useState(true);
    const [error,setError] =useState(null)

    useEffect(()=>{
        const getApi = async ()=>{
            try {
                setLoading(true)
                const res =await axios.get(API_COUNTRY)
                const data = res.data[1];
                setCurrentName(data.name.common ?data.name.common:  data.altSpellings[1] );
                setcountryCap(data.capital);
                setRegion(data.region);
                setSubRegion(data.subregion);
                setLanguage(data.languages);
                setCurrency(data.currencies);
                setPopulation(data.population);
                setFlag(data.flags.png)
                setError(null)
            } catch (error) {
                console.log(error.message);
                setError(error.message)
            }finally{
                setLoading(false)
            }
        }
        getApi();

    },[userInput])

function handleSubmit (e){
   e.preventDefault()
   setUserInput(countryName);
}


  return (
    <main className='container'>
        <div className='header'>
            <h1>REST Countries API </h1>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input type="text"  placeholder='Enter Country IOS Code' value={countryName} onChange={(e)=> setCountryName(e.target.value)}/>
                <button type="submit">search</button>
            </form>
        </div>
        { isloading && <p className='load'>Loading..</p>}
        {!isloading && error && <p className='error'>{error}</p> }
         { !isloading && !error &&  
        <>
            <div className='image'>
                <figure>
                    <img src={flag} alt={countryName} />
                </figure>
                <h2>{currentName}</h2>
                <h3>
                Region : {region}
                </h3>
                
            </div>
            <div className="text-container">
                <div className="subregion">
                <div ><h3>Capital :</h3> <p> {countryCap}</p> </div>
                <div><h3>Sub Region :</h3><p>{subRegion}</p></div>
                        
            </div>
            <div className="currencies">
                <h3>currencies : </h3>
                <div>{ currencyName.map(item => <p key={Math.random()*100}  > <span>{item.symbol}</span> &nbsp;{item.name}</p>)}</div>
            </div>
            <div className='language'>
                <h3>Language :</h3>
                <ul>
                    {lang.map( lan => <li key={Math.random()*100}>{lan}</li>)}
                </ul>
            </div>
            <div className='population'>
                <h3>Population:</h3>
                <p>The {currentName}  has a population of <span> {population}</span> </p>
            </div>
        </div>
        </>}
    </main>
  )
}
