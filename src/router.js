//importiamo funzioni dal pacchetto di vue-rooter
import { createRouter, createWebHistory } from "vue-router";

//importiamo tutti i componenti per i quali verra creata una rotta
import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import AppAbout from './pages/AppAbout.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';

//creiamo una costante che ci fornisce le rotte necessarie che gli passiamo
const router = createRouter(
    {
        //per funzionare questa costante deve avere due chiavi 'history' e 'routes'
        history: createWebHistory(),
        routes: [
            {
                // 3 chiavi necessarie per creare una rotta, per ogni singolo componente della pagina
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/blog',
                name: 'projects',
                component: ProjectList
            },
            {
                path: '/contattami',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/about',
                name: 'about',
                component: AppAbout
            },
            {
                path: '/blog/:slug', // rotta dinamica
                name: 'single-project',
                component: SingleProject
            },
            {
                // rotta per tutte le pagine alla quale non è stata creata una rotta personalizzata
                path: '/:pathMatch(.*)*',
                name: 'not-found',
                component: NotFound
            }
        ]
    }
);
// esportiamo la costante precedentemente creata per passarla al file main.js
export { router };