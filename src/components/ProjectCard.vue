<script>
import { store } from '../store.js';

export default {
    name: "ProjectCard",
    props: ['project'],
    data() {
        return {
            descriptionMaxLength: 150,
            store
        }
    },
    methods: {
        //funzione per delimitare i testi lunghi
        truncateText(text) {
            if (text && text.length > this.descriptionMaxLength) {
                return text.substr(0, this.descriptionMaxLength) + '...';
            }
            return text;
        }
    }
}
</script>

<template>
    <div class="card my-2">

        <img v-if="project.image" :src="`${this.store.baseUrl}/storage/${project.image}`" class="card-img-top">
        <img v-else
            src="https://media.istockphoto.com/id/887464786/it/vettoriale/nessuna-fotocamera-consentita-segno-icona-piatta-in-cerchio-barrato-rosso-vettore.jpg?s=612x612&w=0&k=20&c=kmSQFxPBSqRjO9hTIgyYHxj82GYOB6kGTPc52kNQ_ug="
            class="card-img-top">

        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>

            <h6>{{ project.type ? project.type.name : 'Nessuna tipologia' }}</h6>

            <div>
                <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-primary me-1">
                    {{ technology.name }}
                </span>
            </div>

            <p class="card-text">{{ truncateText(project.description) }}</p>

            <!--creo un link dinamico che mi riporta alla rotta che corrisponde al 'name', concatenata con la slug del progetto che voglio visualizzare-->
            <router-link :to="{ name: 'single-project', params: { slug: project.slug } }" class="btn btn-primary">
                VEDI DETTAGLI
            </router-link>

        </div>
    </div>
</template>

<style lang="scss">
img {
    height: 300px;
    object-fit: fill;
}
</style>