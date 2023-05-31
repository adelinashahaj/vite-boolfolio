<template>
    <h1>Questo è un post singolo</h1>
    
   <h2>{{project.title}}</h2>
</template>

<script>
    import axios from 'axios';
    import { store } from '../store.js';
    
    export default {
        name: 'SingleProject',
    
        data() {
            return {
                store,
                project: [],
             
            }
        },
        mounted() {
        const slug = this.$route.params.slug;
           
        console.log(slug);

        axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                this.project = response.data.project;
            });
        }
    }

</script>