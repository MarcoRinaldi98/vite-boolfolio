<script>
export default {
    name: "ProjectCard",
    props: {
        item: Object
    },
    data() {
        return {
            descriptionMaxLength: 150
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
        <img v-if="this.item.image" :src="`${this.baseUrl}/storage/${this.item.image}`" class="card-img-top">
        <img v-else
            src="https://media.istockphoto.com/id/887464786/it/vettoriale/nessuna-fotocamera-consentita-segno-icona-piatta-in-cerchio-barrato-rosso-vettore.jpg?s=612x612&w=0&k=20&c=kmSQFxPBSqRjO9hTIgyYHxj82GYOB6kGTPc52kNQ_ug="
            class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ this.item.title }}</h5>
            <h5>{{ this.item.technology?.name }}</h5>
            <p class="card-text">{{ this.truncateText(this.item.description) }}</p>
            <a href="#" class="btn btn-primary">VEDI</a>
        </div>
    </div>
</template>

<style lang="scss"></style>