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
        <img v-else
            src="https://media.istockphoto.com/id/887464786/it/vettoriale/nessuna-fotocamera-consentita-segno-icona-piatta-in-cerchio-barrato-rosso-vettore.jpg?s=612x612&w=0&k=20&c=kmSQFxPBSqRjO9hTIgyYHxj82GYOB6kGTPc52kNQ_ug=">
        <div class="d-flex justify-content-around py-3">
            <small>{{ project.created_at }}</small>
            <small>{{ project.slug }}</small>
        </div>
        <p class="pt-4">{{ project.description }}</p>

        <router-link to="/blog" class="mt-5 btn btn-secondary">TORNA A PROGETTI</router-link>
    </div>
</template>