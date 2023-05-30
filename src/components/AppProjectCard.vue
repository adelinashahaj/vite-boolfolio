<template>
                <div class="card">
                    <img v-if="this.propProject.cover_image" :src="`${this.propUrl}/storage/${this.propProject.cover_image}`" class="card-img-top">
                    <img v-else src="https://cdn.icon-icons.com/icons2/1462/PNG/512/120nophoto_100007.png" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">{{this.propProject.title}}</h5>
                        <h5>{{ this.propProject.description }}</h5>
                       
                        <a href="#" class="btn btn-primary">Vedi project completo ... </a>
                    </div>
                </div>

</template>

<script>

export default{
    name:'AppProjectCard',
    props:{
        propProject: Object,
        propUrl: String
    }

}

</script>

<style lang="scss">

</style>