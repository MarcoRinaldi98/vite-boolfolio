<script>
import axios from 'axios';

import ProjectCard from '../components/ProjectCard.vue';

import { store } from '../store.js'

export default {
    name: "ProjectList",
    data() {
        return {
            projects: [],
            store,
            currentPage: 1,
            lastPage: null,
            loading: true
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        // funzione per accedere tramite axios all'array dei projects creata in laravel
        getProjects(gotoPage) {
            axios.get(`${this.store.baseUrl}/api/projects`,
                {
                    params: {
                        page: gotoPage
                    }
                }
            )
                .then(response => {
                    console.log(response);
                    this.loading = true;
                    this.projects = response.data.results.data;
                    this.currentPage = response.data.results.current_page;
                    this.lastPage = response.data.results.last_page;
                    this.loading = false;
                });
        }
    },
    mounted() {
        this.getProjects(1);
    }
}
</script>

<template>
    <div class="container mt-2">
        <div class="row">

            <div v-if="loading == false" class="col-4" v-for="project in projects">
                <ProjectCard :project="project"></ProjectCard>
            </div>

            <div class="vh-100 vw-100 d-flex justify-content-center align-items-center" v-else>
                <img class="ms_loader" src="/loading.gif" alt="Caricamento in corso...">
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination d-flex justify-content-center my-5">
                    <li class="page-item">
                        <button class="page-link" @click="getProjects(currentPage - 1)"
                            :class="{ 'disabled': currentPage == 1 }">
                            Previous
                        </button>
                    </li>
                    <li v-for="(page, index) in this.lastPage" @click="getProjects(index + 1)"
                        :class="{ 'active': currentPage == index + 1 }" class="page-item">
                        <button class="page-link" href="#">
                            {{ index + 1 }}
                        </button>
                    </li>
                    <li class="page-item">
                        <button class="page-link" @click="getProjects(currentPage + 1)"
                            :class="{ 'disabled': currentPage == lastPage }">
                            Next
                        </button>
                    </li>
                </ul>
            </nav>

        </div>
    </div>
</template>

<style lang="scss"></style>