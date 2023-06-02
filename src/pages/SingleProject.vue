<template>
    <h1>Questo è un post singolo</h1>
    
  
   <div v-if="project">
        <img v-if="project.cover_image" :src="`${this.store.baseUrl}/storage/${project.cover_image}`" class="img-fluid">
        <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="img-fluid"/>
            <div class="card-body">
                <h5 class="card-title">{{project.title}}</h5>
                <p class="card-text">Descrizione: <br>
                    {{project.description }}
                </p>
                <p class="card-text">Tecnologia : <br>
                    <span v-for="technology in project.technologies">
                       <span class="badge rounded-pill text-bg-primary">{{technology.name }}</span>
                    </span>
                </p>
                <p class="card-text">Tipologia: <br>
                    {{project.type?.name}}
                </p>
                
                <router-link :to="{name: 'single-project', params: {slug: 'sit-dicta-nulla-non-exercit'}}" class="btn btn-primary">
                            Vedi project 
                        </router-link>
            </div>
    </div>
    <div v-else>
        <img src="/img-loading1.png" alt="">

    </div>
  
</template>

<script>
    import axios from 'axios';
    import { store } from '../store.js';
    
    export default {
        name: 'SingleProject',
    
        data() {
            return {
                store,
                project: null,
             
            }
        },
        mounted() {
        const slug = this.$route.params.slug; 
        console.log(slug);

        axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                if (response.data.susccess == true) {
                    this.project = response.data.results;
                }else {
                   // alert(response.data.error);
                   this.$router.push({name: 'not_found'});
                }
               
            });
        }
    }

</script>