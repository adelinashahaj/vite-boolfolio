
<template>
    <div class="container">
        <div class="row">
            <div class="col-4" v-for="project in projects">
                <AppProjectCard     
                :propProject="project"
                :propUrl="this.baseUrl"          
                ></AppProjectCard>
            </div>
        </div>
        <nav aria-label="Page navigation example">
                <ul class="pagination">
                    <li class="page-item"><button class="page-link" @click="getProjects(currentPage - 1)" :class="{'disabled' : currentPage == 1}">Previous</button></li>
                    <li class="page-item"><button class="page-link" @click="getProjects(currentPage + 1)" :class="{'disabled' : currentPage == lastPage}">Next</button></li>
                </ul>
            </nav>
    </div>

</template>

<script>

import axios from 'axios';
import AppProjectCard from './AppProjectCard.vue';

export default {
        name: "AppMain",

        components: {
           AppProjectCard,
      
        },
        data(){
            return {
              projects: [],
              contentMaxLength: 100,
              baseUrl: 'http://localhost:8000',
              currentPage: 1,
              lastPage: null,
            }
        },
        methods: {
            getProjects(gotoPage) {
                console.log('ciao mondo');

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