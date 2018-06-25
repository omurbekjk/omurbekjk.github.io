const LEVELS = {
  Advanced: {title: 'Advanced', percentage: '95'},
  UpperIntermediate: {title: 'Upper-Intermediate', percentage: '85'},
  UpperLowerIntermediate: {title: 'UpperIntermediate', percentage: '70'},
  Intermediate: {title: 'Intermediate', percentage: '60'},
  Beginner: {title: 'Beginner', percentage: '30'},
};
export const skills = {
  LanguagesAndFrameworks: [
    {
      skill: 'Java',
      level: LEVELS.UpperIntermediate,
      description: 'OOP, Sockets, Jsoup, Swing, Apache POI',
      icon: 'devicon-java-plain-wordmark colored'
    },
    {
      skill: 'Go',
      level: LEVELS.Beginner,
      description: 'Golang basics, unit testing',
      icon: 'devicon-go-plain colored'
    },
    {
      skill: 'test',
      level: LEVELS.Advanced,
      description: 'Golang basics, unit testing'
    },
    {
      skill: 'Node',
      level: LEVELS.UpperIntermediate,
      description: 'Nodejs, Expres, Mongoose',
      icon: 'devicon-nodejs-plain colored'
    },
    {
      skill: 'Git',
      level: LEVELS.UpperIntermediate,
      description: 'git, github, bitbucket, gitlab',
      icon: 'devicon-git-plain colored'
    },
    {
      skill: 'Docker',
      level: LEVELS.Intermediate,
      description: 'docker, dockerhub',
      icon: 'devicon-docker-plain-wordmark colored'
    }

  ],
  FrontEnd: [
    {
      skill: 'JavaScript',
      level: LEVELS.UpperIntermediate,
      description: 'ES6',
      icon: 'devicon-javascript-plain colored'
    },
    {
      skill: 'Typescript',
      level: LEVELS.UpperIntermediate,
      description: 'TS',
      icon: 'devicon-typescript-plain colored'
    },
    {
      skill: 'Angular',
      level: LEVELS.UpperIntermediate,
      description: 'Angular, SPA, routes, firebase, material design',
      icon: 'devicon-angularjs-plain colored'
    },
    {
      skill: 'HTML5/CSS3',
      level: LEVELS.UpperIntermediate,
      description: 'HTML5/CSS3',
      icon: 'devicon-css3-plain-wordmark colored'
    },
    {
      skill: 'JQuery',
      level: LEVELS.Intermediate,
      description: 'Jquery framework',
      icon: 'devicon-jquery-plain-wordmark colored'
    },
    {
      skill: 'Bootstrap',
      level: LEVELS.UpperIntermediate,
      description: 'Bootstrap 4, flexbox, responsive-design',
      icon: 'devicon-bootstrap-plain-wordmark colored'
    }
  ],
  Databases: [
    {
      skill: 'MySql',
      level: LEVELS.Intermediate,
      description: 'db, schema, tables',
      icon: 'devicon-mysql-plain-wordmark colored'
    },
    {
      skill: 'Mongodb',
      level: LEVELS.UpperLowerIntermediate,
      description: 'db, schema, nosql',
      icon: 'devicon-mongodb-plain-wordmark colored'
    },
    {
      skill: 'Dgraph',
      level: LEVELS.Intermediate,
      description: 'graph db, schema, graphql+- queries',
      icon: 'devicon-mongodb-plain-wordmark colored'
    },
    {
      skill: 'Neo4j',
      level: LEVELS.Intermediate,
      description: 'graph db, schema, cypher queries'
    }],
};

