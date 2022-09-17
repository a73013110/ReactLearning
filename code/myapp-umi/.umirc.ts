export default {
  npmClient: 'npm',
  routes: [
    { exact: true, path: "/", component: "./index", redirect: "/film" },
    { 
      exact: true, path: "/film", component: "./Film",
      routes: [
        { exact: true, path: "/film/nowplaying", component: "./Film/Nowplaying" },
        { exact: true, path: "/film/commingsoon", component: "./Film/Commingsoon" },
      ]      
    },
    { exact: true, path: "/cinema", component: "./Cinema" },
    { exact: true, path: "/detail/:id", component: "./Detail/$id" },
    { exact: true, path: "/center", component: "./Center" },

    { path: "*", component: "404" }
  ]
};
