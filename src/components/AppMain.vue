<script>
import axios from 'axios';

export default {
    name: "AppMain",
    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000',
        }
    },
    methods: {
        getProjects() {
            axios.get(`http://localhost:8000/api/projects`)
                .then(response => {
                    console.log(response);
                    this.projects = response.data.results;
                });
        }
    },
    mounted() {
        this.getProjects();
    }
}
</script>

<template>
    <div class="container mt-2">
        <div class="row">

            <div class="col-4" v-for="project in projects">
                <div class="card">
                    <img v-if="project.image" :src="`${this.baseUrl}/storage/${project.image}`" class="card-img-top">
                    <img v-else
                        src="https://media.istockphoto.com/id/887464786/it/vettoriale/nessuna-fotocamera-consentita-segno-icona-piatta-in-cerchio-barrato-rosso-vettore.jpg?s=612x612&w=0&k=20&c=kmSQFxPBSqRjO9hTIgyYHxj82GYOB6kGTPc52kNQ_ug="
                        class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <h5>{{ project.technology?.name }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <a href="#" class="btn btn-primary">VEDI</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<style lang="scss"></style>