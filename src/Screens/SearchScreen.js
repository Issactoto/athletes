// Deconstructed
import React, { Component, Fragment, useState, useEffect } from 'react';
import {useQuery} from "@apollo/client";
import Button from '@material-ui/core/Button';

import {withRouter} from "react-router-dom";

import Select from 'react-select';

import {getNoc, getDiscipline} from'../Components/GraphQL/Query';




const SearchScreen = (props) => {
  const { data, loading, error } = useQuery(getNoc);
  const { data: disciplineData, loading: disciplineLoading, error: disciplineError } = useQuery(getDiscipline);
  const [selectedNocOption, setSelectedNocOption] = useState('all');
  const [selectedDisciplineOption, setSelectedDisciplineOption] = useState('all');
  const [nocOptions, setNocOptions] = useState([]);
  const [disciplineOptions, setDisciplineOptions] = useState([]);
  const [isFetch,setFetch ] = useState(false);


  function loadData() {
    console.log(disciplineData)
    if(data ){
      var tempNocOptions =[];
      var tempDisciplineOptions =[]
    
      for(let i = 0; i < data.findNoc.length; i++){
        //console.log(data.athletes[i].noc);
        tempNocOptions.push({
          value:data.findNoc[i].noc,
          label:data.findNoc[i].noc});
      }
      tempNocOptions.sort();
      setNocOptions(tempNocOptions);

      
      for(let i = 0; i < disciplineData.findDiscipline.length; i++){
        //console.log(data.athletes[i].noc);
        tempDisciplineOptions.push({
          value:disciplineData.findDiscipline[i].discipline,
          label:disciplineData.findDiscipline[i].discipline});
      }
      tempDisciplineOptions.sort();
      setDisciplineOptions(tempDisciplineOptions);
      
      //setDisciplineOptions({tempDisciplineOptions});*/
    };
    }
  
  function handleNocChange (selectedNocOption) {
    setSelectedNocOption( selectedNocOption  
    //  , () => console.log(`Option selected:`, this.state.selectedNocOption)
     );
  };

  function handleDisciplineChange (selectedDisciplineOption) {
    setSelectedDisciplineOption( selectedDisciplineOption  
    //, () =>  console.log(`Option selected:`, this.state.selectedDisciplineOption)
    );
  };

  function submit(){
    props.history.push(`/result/${selectedNocOption.value}/${selectedDisciplineOption.value}`);
  }

  if (loading || disciplineLoading){ 
    return <p>Loading...</p>;}
  if (error  || disciplineError){ return <p>Error :(</p>;}
  
  if(!isFetch){console.log('madik');loadData();setFetch(true)}
  //data.map((athlete,key)=>{
  //  nocOptions.push(athlete.noc)
  //})
 
  return (
    <div className='SearchMain'>
      <h2>Search</h2>

      <div className='buttonPane flex-item'>
        <Select className="mt-4 col-md-8 col-offset-4 flex-item"
          options = { nocOptions }
          onChange={handleNocChange}
          value={selectedNocOption}
        />
      <Select className="mt-4 col-md-8 col-offset-4 flex-item"
        options = { disciplineOptions }
        onChange={handleDisciplineChange}
        value={selectedDisciplineOption}
      />

      <Button
      variant="contained"
      className= "mt-3   flex-item"
        onClick={()=>submit()}
      >
        Submit
      </Button>
      </div>
    </div>
  );
    
}


export default withRouter(SearchScreen);