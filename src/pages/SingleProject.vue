<script>
import axios from 'axios';

import { store } from '../store.js'

export default {
    name: "SingleProject",
    data() {
        return {
            project: null,
            store
        }
    },
    mounted() {
        // recupero il valore di slug per effettuare la chiamata axios e avere tutti i dati per il progetto con tale slug
        const slug = this.$route.params.slug;

        axios.get(`${this.store.baseUrl}/api/project/${slug}`)
            .then(response => {
                console.log(response);
                if (response.data.success == true) {
                    // inserisco nell'array project tutti i dati recuperati per il progetto corrispondente allo slug 
                    this.project = response.data.project;
                } else {
                    // alert(response.data.error); se voglio visualizzare il messaggio di errore impostato nel back

                    this.$router.push({ name: 'not-found' });
                }
            });

        console.log(slug);
    }

}
</script>

<template>
    <!--verifica con il v-if se project non è piu null, allora visualizza i suoi dati-->
    <div class="container text-center" v-if="project">
        <h1 class="mt-3 text-center">{{ project.title }}</h1>

        <h5 class="text-center mt-2 text-uppercase text-primary">{{ project.type?.name }}</h5>

        <div class="py-3">
            <span v-for="technology in project.technologies" class="badge rounded-pill text-bg-primary me-1">
                {{ technology.name }}
            </span>
        </div>

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
    <div class="vh-100 vw-100 d-flex justify-content-center align-items-center" v-else>
        <img class="ms_loader" src="/loading.gif" alt="Caricamento in corso..." />
    </div>
</template>