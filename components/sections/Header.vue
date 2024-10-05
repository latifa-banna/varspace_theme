<template>
  <div>
    <si-app-loader placement="BEFORE_HEADER" />
    <div class="my-2 bg-white relative z-20">
      <div class="flex justify-between p-2">
        <!-- Logo -->
        <div class="logo flex justify-start">
          <router-link to="/">
            <nuxt-img
              width="70"
              height="50"
              property="height"
              class="w-full h-12"
              :src="section.logo ? section.logo.src : $store.state.defaults.logo"
              alt="Store logo"
            />
          </router-link>
        </div>

        <div class="flex">
          <button
          @click="$store.state.showHeaderMenu = !$store.state.showHeaderMenu"
          aria-label="Search button"
            class="flex flex-col px-4 pt-4 bg-gray-100 rounded-md hover:bg-gray-200 lg:hidden"
          >
            <si-svg>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fad"
                data-icon="bars"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                class="w-5 h-5 translate"
              >
                <g class="fa-group">
                  <path
                    fill="currentColor"
                    d="M16 288h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16z"
                    class="fa-secondary"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M432 384H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm0-320H16A16 16 0 0 0 0 80v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V80a16 16 0 0 0-16-16z"
                  ></path>
                </g>
              </svg>
            </si-svg>
          </button>

          <!-- Menu -->
          <nav class="flex justify-between">
            <ul id="menu" class="parent-list hidden lg:flex items-center text-center">
              <li
                v-for="(item, key) in section.menus.items"
                :key="key"
                class="relative mx-4 cursor-pointer group flex items-center text-[rgba(0,0,0,0.5)]"
              >
                <nuxt-link
                  :to="item.url"
                  class="font-epilogue text-[13px] font-semibold uppercase tracking-[1px] h-full flex items-center no-underline outline-none transition-all duration-[0.4s] ease-in-out px-[30px] py-[8px] pr-[15px] text-[rgba(0,0,0,0.5)]"
                >
                  {{ item.text }}

                  <!-- SVG Arrow for items with children -->
                  <svg
                    v-if="item.childrens && item.childrens.length > 0"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#ff831a"
                    class="ml-2"
                  >
                    <path
                      d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z"
                    />
                  </svg>

                  
                </nuxt-link>

                <!-- Children menu -->
                <ul
                  v-if="item.childrens && item.childrens.length > 0"
                  class="absolute top-[19.8px] hidden group-hover:block bg-black shadow-lg rounded-md mt-4 py-2 w-48 z-40"
                >
                  <li
                    v-for="(childItem, childKey) in item.childrens"
                    :key="childKey"
                    class="px-4 py-2 hover:bg-gray-50"
                  >
                    <nuxt-link :to="childItem.url" class="text-[#B4C6A6] pl-4 flex items-start justify-start text-start">
                      {{ childItem.text }}
                    </nuxt-link>
                  </li>
                </ul>
              </li>
            </ul>

            <!-- Get Started Button -->
            <a
              href="#"
              class="bg-black text-white no-underline mx-4 text-[12px] font-epilogue font-semibold leading-[13px] cursor-pointer shadow-none box-border px-6 py-2 text-center flex items-center justify-center"
            >
              {{ section.button.text }}
            </a>
          </nav>
        </div>
      </div>
    </div>
    <si-app-loader placement="AFTER_HEADER" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      showSearch: false,
      q: this.$route.query.search,
      section: this.$settings.sections.header,
    };
  },
  
  watch: {

    "$store.state.showHeaderMenu": {
    immediate: true,
    handler(val) {
      this.show = val;
      if (!val) {
        setTimeout(() => {
          this.show = val;
        }, 500);
      }
    }
  },
    showSearch(val) {
      if (val) {
        this.$nextTick(() => {
          document.querySelector("form.search input").focus();
        });
      }
    },
  },
  mounted() {
    console.log("icon header before click mounted:",this.$store.state.showHeaderMenu); // console = false

    
  },
    methods: {
    search() {
      this.$store.state.search = this.q;
      this.$router.push({ path: "/shop", query: { search: this.q } });
      this.showSearch = false;
    },
  },
};
</script>

<style scoped>
.parent-list {
  position: relative; /* Ensures positioning context for dropdown */
}
</style>
