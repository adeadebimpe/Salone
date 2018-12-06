<template>
    <div class="hairstyle-page">
        <HairstyleHeader />
        <Styles />
    </div>
</template>

<script>
    import HairstyleHeader from './Hairstyle/HairstyleHeader.vue';
    import Styles from './Hairstyle/Styles.vue';
    export default {
        name: 'Hairstyle',
        components: {
            HairstyleHeader,
            Styles,
        }
    }
</script>

<style scoped>

</style>