<template>
  <div class="container bg-red-500">
    <div v-if="loading" class="flex items-center justify-center my-5 bg-green-500">
      <si-loader></si-loader>
    </div>
    <div v-if="items.length>0">
      <si-carousel v-if="$settings.sections.collections.active" component="si-collection" :title="$settings.sections.collections.title" :list="items" :mobile_size="this.mobile_size ? this.mobile_size : 100"></si-carousel>
    </div>
    <div v-if="!loading && items.length==0" class="flex flex-wrap items-center p-2 mx-2 bg-white border rounded">
      <div class="w-full md:w-1/2">
        <svg class="h-40 max-w-full text-gray-400 translate" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="512" height="512" x="0" y="0" viewBox="0 0 512.646 512.646" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><g xmlns="http://www.w3.org/2000/svg"><g><path d="m292.958 195.921c6.565 0 11.907-5.342 11.907-11.908v-31.44c0-6.566-5.342-11.907-11.907-11.907h-73.27c-6.566 0-11.908 5.341-11.908 11.907v31.44c0 6.566 5.342 11.908 11.908 11.908zm-70.178-40.255h67.084v25.255h-67.084z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m328.432 358.159c-6.565 0-11.907 5.341-11.907 11.907v31.441c0 6.565 5.342 11.907 11.907 11.907h73.271c6.565 0 11.907-5.342 11.907-11.907v-31.441c0-6.566-5.342-11.907-11.907-11.907zm70.178 40.255h-67.085v-25.255h67.085z" fill="currentColor" data-original="#000000"></path><path d="m184.213 358.159h-73.27c-6.566 0-11.907 5.341-11.907 11.907v31.441c0 6.565 5.341 11.907 11.907 11.907h73.27c6.565 0 11.907-5.342 11.907-11.907v-31.441c0-6.566-5.342-11.907-11.907-11.907zm-3.093 40.255h-67.084v-25.255h67.084z" fill="currentColor" data-original="#000000" style="" class=""></path><path d="m501.353 434.987h-20.041v-29.074c0-4.142-3.357-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v29.07h-202.489v-202.489h67.78v50.254c0 4.24 2.16 8.091 5.777 10.302s8.031 2.375 11.804.442l15.884-8.142 15.883 8.142c1.749.896 3.634 1.341 5.514 1.341 2.178 0 4.349-.597 6.29-1.784 3.617-2.211 5.777-6.063 5.777-10.302v-50.254h67.584c.108 0 .196.088.196.197v139.151c0 4.142 3.357 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-139.151c0-8.379-6.817-15.197-15.196-15.197h-93.548v-202.303c0-8.376-6.814-15.19-15.19-15.19h-202.103c-8.379 0-15.197 6.817-15.197 15.197v37.602c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-37.602c0-.108.088-.197.197-.197h67.583v50.255c0 4.24 2.16 8.091 5.778 10.302 1.942 1.187 4.112 1.784 6.289 1.784 1.88 0 3.767-.446 5.515-1.342l15.883-8.142 15.882 8.141c3.774 1.934 8.187 1.771 11.804-.441 3.619-2.211 5.779-6.063 5.779-10.303v-50.254h67.59c.105 0 .19.085.19.19v202.3h-202.49v-130.62c0-4.142-3.358-7.5-7.5-7.5s-7.5 3.358-7.5 7.5v130.624h-93.548c-8.379 0-15.197 6.817-15.197 15.197v202.296h-20.04c-6.171 0-11.191 5.02-11.191 11.191v21.775c0 6.171 5.02 11.191 11.191 11.191h17.64v20.16c0 7.356 5.985 13.342 13.341 13.342h21.819c7.356 0 13.342-5.985 13.342-13.342v-20.16h357.777v20.16c0 7.356 5.985 13.342 13.342 13.342h21.818c7.356 0 13.342-5.985 13.342-13.342v-20.16h17.64c6.17 0 11.19-5.02 11.19-11.191v-21.775c-.001-6.171-5.021-11.191-11.191-11.191zm-226.565-374.521-12.958-6.642c-3.449-1.767-7.565-1.767-11.015 0l-12.957 6.642v-45.466h36.93zm71.815 172.028h36.929v45.466l-12.956-6.642c-3.448-1.768-7.567-1.769-11.016 0l-12.957 6.642zm-217.49 0h36.929v45.466l-12.958-6.642c-3.448-1.768-7.566-1.768-11.015 0l-12.957 6.642v-45.466zm-82.78.196c0-.108.088-.197.197-.197h67.583v50.254c0 4.24 2.16 8.091 5.777 10.302 3.618 2.211 8.031 2.377 11.805.442l15.883-8.142 15.883 8.142c1.749.896 3.634 1.341 5.514 1.341 2.178 0 4.348-.597 6.29-1.784 3.618-2.211 5.778-6.063 5.778-10.302v-50.254h67.78v202.489h-202.49zm16.102 264.956h-18.502v-18.502h18.502zm406.278 0h-18.502v-18.502h18.502zm28.83-33.502h-482.441v-14.157h482.441z" fill="currentColor" data-original="#000000"></path></g></g></g></svg>
      </div>
      <div class="w-full pl-4 border-l md:w-1/2">
        <h2>{{ 'You don\'t have any collection' }}</h2>
        <p>{{ 'Go to your store admin > products > collections >' }} <a href="//business.storeino.com/stores/collections" target="_blank" class="text-blue-600 ">{{ 'Add new' }}</a></p>
        <a href="https://palest.storeino.com" target="_blank" class="inline-block p-2 mt-1 text-blue-600 border rounded-md">{{'View theme demo'}}</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      items: [],
      mobile_size: this.$settings.sections.collections.mobile_size
    };
  },
  async fetch(){
      try{
          const filter = {};
          if(this.$settings.sections.collections.items.length > 0){
            this.items = this.$settings.sections.collections.items;
          }else{
            const { data } = await this.$storeino.collections.search(filter)
            this.items = data.results;
          }
      }catch(e){
        console.log({e});
      }
      this.loading = false;
  }
};
</script>
