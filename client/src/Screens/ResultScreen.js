// Deconstructed
import React, { Component, Fragment, useState } from 'react';
import {withRouter,useParams, Link} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  makeStyles
} from "@material-ui/core";

import '../stylesheet.css';

import {getAthlete} from'../Components/GraphQL/Query';



const useStyles = makeStyles({
  customTableContainer: {
    overflowX: "initial"
  }
});

const ResultScreen = (props) => {
  const { noc,discipline } = useParams();
  const { data, loading, error } = useQuery(getAthlete, {variables:{noc,discipline}});
  const [isFetch,setFetch ] = useState(false);
  const [athletes, setAthletes] = useState([]);
  const classes = useStyles();



  function loadData(){
    var tempAthletes =[];
  
    for(let i = 0; i < data.findAthletesByDisciplineAndNoc.length; i++){
      //console.log(data.athletes[i].noc);
      tempAthletes.push(data.findAthletesByDisciplineAndNoc[i].name)
    }
    setAthletes(tempAthletes);
  }

  if(loading) return <p>loading</p>;
  if(error) return <p>error :(</p>;
  if(!isFetch){console.log('madik');loadData();setFetch(true)}

  return(
  <div>
    <h2>Query Result</h2>
    <Link to='/search' className='backButton'>Back</Link>
    <div className='parameterBox'>
    <div><p className='parameter'>{noc}</p></div>
    <div><p className='parameter'>{discipline}</p></div>
    </div>
    
    <div className="container tableFrame">
    <TableContainer classes={{ root: classes.customTableContainer }}>
      <Table stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Athletes</TableCell>
          </TableRow>
        </TableHead>
        {athletes
          .map((athlete,index ) => (
            <TableRow>
              <TableCell><p>{index+1+'.  '+athlete}</p></TableCell>
            </TableRow>
          ))}
      </Table>
    </TableContainer>
        </div>
  </div>)
}

export default withRouter(ResultScreen);