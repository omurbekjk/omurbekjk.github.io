const LEVELS = {
  Advanced: 'Advanced',
  UpperIntermediate: 'Upper-Intermediate',
  Intermediate: 'Intermediate',
  Beginner: 'Beginner',
};
export const skills = {
  LanguagesAndFrameworks: {
    'Java SE': {
      level: LEVELS.UpperIntermediate,
      description: 'OOP, Sockets, Jsoup, Swing, Apache POI'
    },
    'Golang': {
      level: LEVELS.Beginner,
      description: 'Golang basics, unit testing'
    },
    'Node': {
      level: LEVELS.UpperIntermediate,
      description: 'Nodejs, Expres, Mongoose'
    },
  },
  FrontEnd: {
    'JavaScript': {
      level: LEVELS.Intermediate,
      description: 'ES6'
    },
    'Typescript': {
      level: LEVELS.UpperIntermediate,
      description: 'TS'
    },
    'Angular': {
      level: LEVELS.UpperIntermediate,
      description: 'Angular, SPA, routes, firebase, material design'
    },
    'HTML5/CSS3': {
      level: LEVELS.UpperIntermediate,
      description: 'HTML5/CSS3'
    },
    'JQuery': {
      level: LEVELS.Intermediate,
      description: 'Jquery framework'
    },
    'Bootstrap': {
      level: LEVELS.UpperIntermediate,
      description: 'Bootstrap 4, flexbox, responsive-design'
    },
  },
  Databases: {
    MySql: {
      level: LEVELS.Intermediate,
      description: 'db, schema, tables'
    },
    Mongodb: {
      level: LEVELS.Intermediate,
      description: 'db, schema, nosql'
    },
    Neo4j: {
      level: LEVELS.Intermediate,
      description: 'graph db, schema, cypher queries'
    }
  },
  Other: {
    Git: {
      level: LEVELS.UpperIntermediate,
      description: 'git, github, bitbucket, gitlab'
    }
  }
};
