<script>
import axios from 'axios';

import ProjectCard from './ProjectCard.vue';

export default {
    name: "AppMain",
    data() {
        return {
            projects: [],
            baseUrl: 'http://localhost:8000',
            currentPage: 1,
            lastPage: null
        }
    },
    components: {
        ProjectCard
    },
    methods: {
        // funzione per accedere tramite axios all'array dei projects creata in laravel
        getProjects(gotoPage) {
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

            <div class="col-4" v-for="project in projects">
                <ProjectCard :item="project"></ProjectCard>
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
                        :class="{ 'disabled': currentPage == index + 1 }" class="page-item">
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