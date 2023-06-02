
<template>
    <div class="container">
        <div class="row">
            <div v-if="loading == false" class="col-3" v-for="project in projects" >
                <AppProjectCard     
                :propProject="project"></AppProjectCard>
            </div>
            <div v-else>
              <img src="/img-loading1.png" alt="Caricamento in corso...">
            </div>
            <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item">
                        <button class="page-link" @click="getProjects(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="getProjects(1)" >1</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link"  @click="getProjects(2)" >2</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link"  @click="getProjects(3)" >3</button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="getProjects(currentPage + 1 )" :class="{'disabled' : currentPage == lastPage}">Next</button>
                    </li>
                </ul>
            </nav>
        </div> 
    </div>
    
</template>

<script>

import axios from 'axios';
import AppProjectCard from '../components/AppProjectCard.vue';
import { store } from '../store.js';

export default {
        name: "ProjectList",

        components: {
           AppProjectCard,
      
        },
        data(){
            return {
              projects: [],
              store,
              baseUrl: 'http://localhost:8000',
              currentPage: 1,
              lastPage: null,
              loading: true
            }
        },
        methods: {
            getProjects(gotoPage) {
                this.loading = true;
                axios.get(`${this.baseUrl}/api/projects`, 
                {
                    params: {
                            page: gotoPage
                        }
                }
                )
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                });

            },
           
        },
        mounted() {
            this.getProjects(1);
        }
    }
</script>

<style lang="scss">

</style>