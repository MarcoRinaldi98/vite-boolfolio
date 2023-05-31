<script>
import axios from 'axios';

import { store } from '../store.js'

export default {
    name: "SingleProject",
    data() {
        return {
            project: [],
            store
        }
    },
    mounted() {
        const slug = this.$route.params.slug;

        axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                this.project = response.data.project;
            });

        console.log(slug);
    }

}
</script>

<template>
    <div class="container text-center">
        <h1 class="mt-3 text-center">{{ project.title }}</h1>
        <h5 class="text-center mt-2 text-uppercase text-primary">{{ project.type?.name }}</h5>
        <img v-if="project.image" :src="`${this.store.baseUrl}/storage/${project.image}`">
        <div v-else class="text-center mt-4">Nessuna immagine</div>
        <div class="d-flex justify-content-around py-3">
            <small>{{ project.created_at }}</small>
            <small>{{ project.slug }}</small>
        </div>
        <p class="pt-4">{{ project.description }}</p>
    </div>
</template>