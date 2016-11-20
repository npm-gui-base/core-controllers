const CrawlerRoutes = require('./crawler/crawler.routes');
const DependenciesRoutes = require('./dependencies/dependencies.routes');
const GlobalPackagesRoutes = require('./globalPackages/globalPackages.routes');
const DependenciesBinRoutes = require('./dependenciesBin/dependenciesBin.routes');
const ProjectRoutes = require('./project/project.routes');
const StaticRoutes = require('./static/static.routes');
const TasksRoutes = require('./tasks/tasks.routes');

module.exports = {
  CrawlerRoutes,
  DependenciesRoutes,
  GlobalPackagesRoutes,
  DependenciesBinRoutes,
  ProjectRoutes,
  StaticRoutes,
  TasksRoutes
};
