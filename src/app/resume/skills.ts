const LEVELS = {
  Advanced: {title: 'Advanced', percentage: '95'},
  UpperIntermediate: {title: 'Upper-Intermediate', percentage: '85'},
  Intermediate: {title: 'Intermediate', percentage: '60'},
  Beginner: {title: 'Beginner', percentage: '30'},
};
export const skills = {
  LanguagesAndFrameworks: [
    {
      skill: 'Java',
      level: LEVELS.UpperIntermediate,
      description: 'OOP, Sockets, Jsoup, Swing, Apache POI'
    },
    {
      skill: 'Golang',
      level: LEVELS.Beginner,
      description: 'Golang basics, unit testing'
    },
    {
      skill: 'test',
      level: LEVELS.Advanced,
      description: 'Golang basics, unit testing'
    },
    {
      skill: 'Node',
      level: LEVELS.UpperIntermediate,
      description: 'Nodejs, Expres, Mongoose'
    },
    {
      skill: 'Git',
      level: LEVELS.UpperIntermediate,
      description: 'git, github, bitbucket, gitlab'
    },
    {
      skill: 'Docker',
      level: LEVELS.Intermediate,
      description: 'docker, dockerhub'
    }

  ],
  FrontEnd: [
    {
      skill: 'JavaScript',
      level: LEVELS.UpperIntermediate,
      description: 'ES6'
    },
    {
      skill: 'Typescript',
      level: LEVELS.UpperIntermediate,
      description: 'TS'
    },
    {
      skill: 'Angular',
      level: LEVELS.UpperIntermediate,
      description: 'Angular, SPA, routes, firebase, material design'
    },
    {
      skill: 'HTML5/CSS3',
      level: LEVELS.UpperIntermediate,
      description: 'HTML5/CSS3'
    },
    {
      skill: 'JQuery',
      level: LEVELS.Intermediate,
      description: 'Jquery framework',
    }
    ,
    {
      skill: 'Bootstrap',
      level: LEVELS.UpperIntermediate,
      description: 'Bootstrap 4, flexbox, responsive-design'
    }
  ],
  Databases: [
    {
      skill: 'MySql',
      level: LEVELS.Intermediate,
      description: 'db, schema, tables'
    },
    {
      skill: 'Mongodb',
      level: LEVELS.Intermediate,
      description: 'db, schema, nosql'
    },
    {
      skill: 'Neo4j',
      level: LEVELS.Intermediate,
      description: 'graph db, schema, cypher queries'
    }],
};

