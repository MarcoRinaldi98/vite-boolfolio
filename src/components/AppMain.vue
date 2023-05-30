<script>
import axios from 'axios';

import ProjectCard from './ProjectCard.vue';

export default {
    name: "AppMain",
    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000'
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        // funzione per accedere tramite axios all'array dei projects creata in laravel
        getProjects() {
            axios.get(`${this.baseUrl}/api/projects`)
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
                <ProjectCard :item="project"></ProjectCard>
            </div>

        </div>
    </div>
</template>

<style lang="scss"></style>