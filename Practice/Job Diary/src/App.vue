<template>
    <ul>
        <job-resource v-for="res in storedResources" :key="res.id"
        :title="res.title" :description="res.description" :link="res.link">

        </job-resource>
    </ul>
</template>
<script>
import JobResource from './components/job-resources/JobResource.vue';

export default {
    components: {
      JobResource  
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'official-guide',
                    title: 'official-guide',
                    description: 'The official vue.js documentation',
                    link:'https://vuejs.org'
                }, 
                 {
                    id: 'google',
                    title: 'Google',
                    description: 'Your handy search tool',
                    link:'https://google.com'
                }, 
            ]

        };
    },
}
</script>
