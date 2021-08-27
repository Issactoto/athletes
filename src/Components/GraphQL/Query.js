import {gql} from "@apollo/client";

//get athletes countries
const getAthlete = gql`
query findAthlete($noc:String!, $discipline: String!){
  findAthletesByDisciplineAndNoc(noc:$noc,discipline:$discipline){
    name
  }
 }
`;


//get athletes noc
const getNoc = gql`
query ExampleQuery {
  findNoc {
    noc
  }
}
`;


//get athletes disciplines
const getDiscipline = gql`
query ExampleQuery {
  findDiscipline {
    discipline
  }
}
`;

//get athletes names with countries

//get athletes names with noc and countries



export{
  getAthlete,
  getNoc,
  getDiscipline
}