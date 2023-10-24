<template>
  <div class="pl-[100px] pr-[100px] pb-[130px]">
    <div>
        <div class=" text-2xl font-medium text-orange-500">{{ $settings.blog.text }}</div>
        <div class="pt-[30px] pb-[80px] flex flex-wrap justify-between max-w-full">
            <div class="text-6xl">{{ $settings.blog.title }}</div>
        <nuxt-link :to=" $settings.blog.url " class="border bg-black text-white w-[160px] text-center
        pt-[17px] font-medium
        ">{{ $settings.blog.text_url }}</nuxt-link>
        </div>
       
        
    </div>
    <div >
      <div
        class="container flex flex-wrap justify-between max-w-full "
      >
        <div v-for="item in items" :key="item.title" class="w-[540px]">
          <div class="flex flex-nowrap justify-between  w-36  ">
          <div v-for="category in item.categories" :key="category.id">
            <nuxt-link :to="category.slug" class="bg-black text-white text-[19px] rounded-3xl px-6 py-2 absolute m-4">{{ category.name }}</nuxt-link>

          </div>
          </div>
            <nuxt-link :to="item.slug">  <img
            :src="item.image.url" 
            :alt="item.image.url"
            class="w-[500px] h-[330px]"
          /> </nuxt-link>
         
          <h1 class="m-2 font-medium text-2xl pt-[20px]">{{ item.title }}</h1>

          <p class="m-2 text-2xl text-gray-500">
            <small >{{ truncateText(item.excerpt, 70) }}</small>
  
          </p>
        </div>
      </div>
    </div>
   
    <hr/>
   
  </div>
</template>
<script>
export default {
  data() {
    return {
      items: [],
      categories: [],
    };
  },
  mounted() {
    this.getCategories();
    this.getItems();
  },
  computed: {
    truncatedText() {
      return this.truncateText(this.item.excerpt, 40);
    }
  },
  methods: {
    async getCategories() {
      this.categories = [];
      try {
        const response = await this.$storeino.categories.search({});
        this.categories = response.data;
        console.log("categories :" + this.categories);
      } catch (e) {
        console.log({ e });
      }
    },
    async getItems() {
      this.items = [];

      try {
        const response = await this.$storeino.pages.search();

        this.items = response.data.results;
        console.log("items blog: " + response.data.results);
      } catch (e) {
        console.log({ e });
      }
    },
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.slice(0, maxLength) + ' ...';
      }
    }
  },
};
</script>
