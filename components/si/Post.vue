<template>
  <div class="w-full">
    <!-- --------------------- -->
    <div class="flex justify-evenly pl-[0px] w-[250px] ml-0 relative right-20">
      <div v-for="category in item.categories" :key="category.id" class=" ">
        <nuxt-link
          :to="category.slug"
          class="bg-black text-white text-[14px] font-medium whitespace-nowrap rounded-3xl px-4 py-1 absolute m-4"
          >{{ category.name }}</nuxt-link
        >
      </div>
    </div>
    <!-- -------------------- -->
    <nuxt-link
      :to="`/posts/${item.slug}`"
      :title="item.title"
      :aria-label="item.title"
    >
      <si-image
        :src="item.image ? item.image.url : null"
        :alt="item.title"
        class="w-full h-full md:w-[500px] md:h-[270px]"
      />
    </nuxt-link>

    

    <h1 class="box-border text-black block font-epilogue text-[18px] md:text-[19px] lg:text-[21px] font-medium leading-[27px] md:leading-[28.5px] lg:leading-[31.5px] mb-0 mt-0 pt-[20px]">{{ item.title }}</h1>

    <p class="block text-[#7a7a7a] font-inter text-[15px] lg:text-[16px] font-normal leading-[27px] lg:leading-[28.8px] my-[14.4px]">
      <small class="text">{{ truncateText(item.excerpt, 70) }}</small>
    </p>
    <!-- ------------------------ -->
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    truncatedText() {
      return this.truncateText(this.item.excerpt, 40);
    },
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) {
        return text;
      } else {
        return text.slice(0, maxLength) + " ...";
      }
    },
  },
};
</script>
<style scoped>
.a {
  font-family: "Epilogue";
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
  box-shadow: none;
}
.a:visited {
  text-decoration: none;
  outline: 0;
}

/* -------------- */
.title-product {
  font-family: "Epilogue", sans-serif;
  font-size: 21px;
  font-weight: 500;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.5em;
  color: #000000;
  padding-top: 20px;
}
.description .text {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-transform: none;
  font-style: normal;
  text-decoration: none;
  line-height: 1.8em;
  color: #7a7a7a;
  transition: all 0.4s ease;
}
</style>
