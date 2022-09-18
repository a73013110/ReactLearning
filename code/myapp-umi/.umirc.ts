import { defineConfig } from 'umi'

export default defineConfig({
  npmClient: 'npm',
  routes: [
    { path: "/", component: "@/pages/index", exact: true, redirect: "/film" },
    { path: "/login", component: "@/pages/Login", exact: true },
    {
      path: "/film", component: "@/pages/Film", exact: true,
      routes: [
        { path: "/film/nowplaying", component: "@/pages/Film/Nowplaying", exact: true },
        { path: "/film/commingsoon", component: "@/pages/Film/Commingsoon", exact: true },
      ]
    },
    { path: "/cinema", component: "@/pages/Cinema", exact: true },
    { path: "/detail/:id", component: "@/pages/Detail/$id", exact: true },
    { path: "/center", component: "@/pages/Center", wrappers: ["@/wrappers/Auth"], exact: true },

    { path: "*", component: "@/pages/404" }
  ],
  mock: {
    include: ["src/mock/*"]
  },
  proxy: {
    "/ajax": {
      target: "https://i.maoyan.com",
      changeOrigin: true
    }
  }
});