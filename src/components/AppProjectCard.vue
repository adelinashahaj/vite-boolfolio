<template>
                <div class="card">
                    <img v-if="this.propProject.cover_image" :src="`${this.store.baseUrl}/storage/${this.propProject.cover_image}`" class="card-img-top">
                    <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{{this.propProject.title}}</h5>
                        <p class="card-text">Descrizione: <br>
                            {{ truncateText(this.propProject.description) }}
                        </p>
                        <p class="card-text">Tecnologia : <br>
                            <span v-for="technology in this.propProject.technologies">
                                <span class="badge rounded-pill text-bg-primary">{{technology.name }}</span>
                            </span>
                        </p>
                        <p class="card-text">Tipologia: <br>
                            {{this.propProject.type?.name}}
                        </p>
                        
                       
                        <router-link :to="{name: 'single-project', params: {slug: this.propProject.slug}}" class="btn btn-primary">
                            Vedi project completo
                        </router-link>
                    </div>
                </div>

</template>

<script>
import { store } from '../store.js';

export default{
    name:'AppProjectCard',
    props:{
        propProject: Object,
    },
    data () {
        return {
            contentMaxLength: 50,
            store
        }
    },
    methods: {
        truncateText(text) {
                if (text && text.length > this.contentMaxLength) {
                    return text.substr(0, this.contentMaxLength) + '...';
                }
                return text;
            },
    }

}

</script>

<style lang="scss" scoped>


</style>