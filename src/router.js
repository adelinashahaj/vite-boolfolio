import { createRouter, createWebHistory } from "vue-router";

import AppHome from './pages/AppHome.vue';
import AppContact from './pages/AppContact.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter(
    {
        history: createWebHistory(),
        routes: [
            {
                path: '/',
                name: 'home',
                component: AppHome
            },
            {
                path: '/contattami',
                name: 'contact',
                component: AppContact
            },
            {
                path: '/progetto',
                name: 'projects',
                component: ProjectList
            },
            {
                path: '/progetto/:slug',
                name: 'single-project',
                component: SingleProject
            },
            {
                path: '/:pathMatch(.*)*',
                name: 'not_found',
                component: NotFound
            }
            
        ]
    }
);

export { router };