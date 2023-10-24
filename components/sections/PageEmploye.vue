<template>
    <div class="container my-2 bg-white">
     <div  class="flex items-center justify-center my-5">
            <si-loader></si-loader>
        </div>
        <div v-for="item in  items" class="">
            <h1 class="m-2">{{ item.title }}</h1>
            <hr class="m-0">
            <p class="m-2"><small>{{ item.excerpt }}</small></p>
            <hr>
            <div  class="p-2 mx-2 my-3 bg-white rounded-md description" id="description" v-html="item.content"></div>

           

            <div class="flex items-center">
                <div class="flex w-full border-b border-gray-200 "></div>
                <h3 class="p-2  whitespace-nowrap"></h3>
                <div class="flex w-full border-b border-gray-200 "></div>
            </div>
            <div class="flex justify-center ">
                <div class="flex items-center justify-center h-12 m-2">
                    <a class="flex h-full" :href="item.url" target="_blank" rel="noopener noreferrer">
                        <si-image class="w-10 h-10" width="40" height="40" :src="item.image" :alt="item.name"/>
                    </a>
                </div>
            </div>
        </div>
        <hr>
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            items: [],
     
        }
    },
    async fetch(){
        
    },
    mounted() {
   
    this.getItems();
  },
  methods: {
  
    async getItems() {
      this.items = [];

      try {
        const response = await this.$storeino.pages.search();

        this.items = response.data.results;
      
      } catch (e) {
        console.log({ e });
      }
    },
  }}
</script>
