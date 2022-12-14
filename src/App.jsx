import './App.scss';
import Main from './Containers/Main/Main';
import NavBar from './Containers/NavBar/NavBar';
import {useState,useEffect} from "react";

function App() {

  const filterData = [{description: "High ABV (>6.0%)",id:"filter1" , value:"abv",checked:false},
  {description:"Classic Range",id:"filter2",value:"classic",checked:false},
  {description:"Acidic (ph < 4)", id:"filter3",value:"ph",checked:false}]
  
  const [beerNumber, setBeerNumber] = useState(80);

  const [page, setPageNumber] = useState(1);

  const [searchTerm, setSearchTerm] = useState("");

  const [filter, updateFilters] = useState(filterData);

  const [beerData, setBeerData] = useState([]);

  const handleNavBarChanges = (event)=> {
    if(event.target.id === "search"){
      setSearchTerm(event.target.value)
    } else if (event.target.type === "checkbox"){
      const updatedChecks = filter.map(element =>{
        console.log(event.target);
        if(element.id === event.target.id){
          const update = !element.checked
          
          element.checked = update;
          
        }
        
        return element;
      })
      updateFilters(updatedChecks);
    }else if(event.target.id === "next" || event.target.id==="previous"){
      if(event.target.id === "next" && page < 5){
        setPageNumber(page + 1);
      } else if(event.target.id === "previous" && page > 1){
        setPageNumber(page - 1);
      }
    }   
    else {
      setBeerNumber(event.target.value);
    }
    
   
  }


  const getInitialBeers = async (newSearch, newFilters, numberOfBeers,page)=>{
    let url = `https://api.punkapi.com/v2/beers?page=${page}&per_page=${numberOfBeers}&`;
    let filterByPh = false;
    newFilters.forEach(element =>{
      if(element.value === "abv" && element.checked === true){
        url +="abv_gt=6.0&"
      }
      if(element.value === "classic" && element.checked === true){
        url +="brewed_before=01-2010&"
      }
      if(element.value === "ph" && element.checked === true ){
        filterByPh = true;
      }
    });

    if(newSearch !== ""){
      let modifiedSearchTerm = newSearch;
      modifiedSearchTerm = modifiedSearchTerm.split(" ");
      modifiedSearchTerm = modifiedSearchTerm.join("_");
      url += `beer_name=${modifiedSearchTerm}`;
    }
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    let filteredData = [];
    if(filterByPh){
        filteredData =data.filter((beer)=>{
      return beer.ph < 4.0 && beer.ph != null;
    })} else{
      filteredData =data.filter((beer)=>{
        return true;
    })}
    setBeerData(filteredData);
    
  }
  


  useEffect(()=>{
    getInitialBeers(searchTerm,filter, beerNumber,page);
  },[searchTerm,filter,beerNumber,page])



  
  

  return (
    <div className="App" data-testid = "app">
      <div className='App-Nav'>
        <NavBar filterData={filter} toSearch={searchTerm} onChange={handleNavBarChanges} rangeValue={beerNumber} page={page}/>
      </div>
      <div className='App-Main'>
      <Main beerData={beerData} />
      </div>
      
    </div>
  );
}

export default App;
