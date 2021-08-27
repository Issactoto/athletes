const {ApolloServer, gql} = require('apollo-server');
const fs = require('fs')
var csv = require('csv-parse')


const inputPath = './data.csv'

var athletes =[]
var noc = []
var discipline = []


function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

const typeDefs = gql`
    type Athletes {
        name: String
        noc: String
        discipline:String
    }
    type Noc{
      noc: String
    }

    type Discipline{
      discipline: String
    }

    type Query {
        athletes: [Athletes]
        findAthletesByDiscipline(discipline: String!): [Athletes]
        findAthletesByNoc(noc: String!): [Athletes]
        findAthletesByDisciplineAndNoc(discipline: String!,noc:String!): [Athletes]
        findNoc:[Noc]
        findDiscipline:[Discipline]

    }

`

const resolvers = {
  Query: {
      athletes: () => athletes,
      findAthletesByDiscipline(parent, args, context, info) {
        return athletes.filter(athlete => athlete.discipline === args.discipline);
      },
      findAthletesByNoc(parent, args, context, info) {
        return athletes.filter(athlete => athlete.noc === args.noc);
      },
      findAthletesByDisciplineAndNoc(parent, args, context, info) {
        return athletes.filter(athlete => athlete.discipline === args.discipline && athlete.noc === args.noc);
      },
      findNoc(parent, args, context, info) {
        let tempNoc = noc.filter(onlyUnique);
        var jsonNoc = []
        for(let x of tempNoc){
          jsonNoc.push({noc:x})
        }
        return jsonNoc;
      },
      findDiscipline(parent, args, context, info) {
        let tempDiscipline = discipline.filter(onlyUnique);
        var jsonNoc = []
        for(let x of tempDiscipline){
          jsonNoc.push({discipline:x})
        }
        return jsonNoc;
      }
  },
};



async function getData(){
  fs.createReadStream('./data.csv')
  .pipe(csv())
  .on('data', (row) => {
    //console.log(row);
    athletes.push({
      
        name: row[0],
        noc: row[1],
        discipline: row[2],
      

    })
    noc.push(row[1])
    discipline.push(row[2])

  })
  .on('end', () => {
    startServer()
  });
}
  
async function startServer(){
  const server = new ApolloServer({ typeDefs, resolvers , cors:true});
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
}

getData()