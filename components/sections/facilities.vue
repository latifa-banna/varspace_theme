<template>
  <div
    class="text-center lg:px-[40px] pt-[20px] pb-[40px] px-[20px] bg-[#FAF7F0] opacity-0 transform scale-95 transition-opacity transition-transform duration-700 delay-200 fade-in "
  >
    <div class="text-center py-[70px]">
      <div
        class="box-border text-[#ff831a] font-epilogue block md:text-[15px] sm:text-[14px] font-semibold h-[28.8px] tracking-[4px] leading-[28.8px] mb-[14.4px] mt-0 mx-0 text-center uppercase"
      >
        {{ section.text }}
      </div>
      <div class="flex justify-center box-border pb-[10px]">
        <h1
          class="px-5 mb-[15px] box-border text-black block font-epilogue text-[28px] sm:text-[32px] lg:text-[45px] md:text-[38px] font-medium text-center"
        >
          {{ section.title }}
        </h1>
      </div>

      <div class="flex justify-center">
        <p
          class="text-lg md:w-[68%] lg:w-[55%] mx-auto box-border text-[#7a7a7a] block font-sans lg:text-[16px] sm:text-[15px] font-normal leading-[28.8px] m-0 text-center"
        >
          {{ section.description }}
        </p>
      </div>
    </div>

    <div class="grid lg:grid-cols-4 md:grid-cols-2 gap-x-4 gap-y-5 mb-12">
      <nuxt-link
        :to="section.links.link0.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link0.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link1.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link1.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link2.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link2.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link3.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link3.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link4.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link4.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link5.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link5.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link6.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link6.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link7.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link7.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link8.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link8.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link9.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link9.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link10.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link10.text }}</nuxt-link
      >
      <nuxt-link
        :to="section.links.link11.url"
        class="w-full text-left bg-white text-black text-xl pl-[25px] py-[25px] border border-[#f5f4f4] shadow-[4px_4px_10px_0px_rgba(0,0,0,0.06)] no-underline inline-block cursor-pointer bg-transparent box-border font-epilogue  text-[19px] font-medium normal-case leading-[28.5px] list-none outline-none"
        >{{ section.links.link11.text }}</nuxt-link
      >
    </div>

    <nuxt-link
      :to="section.last_link.url"
      class="bg-black hover:bg-[#ff831a] rounded-tl-none rounded-tr-none border-0 shadow-none box-border text-white cursor-pointer inline-block font-epilogue text-[14px] font-semibold h-[46px] leading-[14px] pb-[16px] pl-[32px] pr-[32px] pt-[16px] text-center no-underline transition-all duration-300 ease-in-out w-[171.7px]"
    >
      <span
        class="box-border text-white cursor-pointer block fill-current text-white font-epilogue text-[14px] normal-case font-semibold h-[14px] leading-[14px] text-center no-underline transition-all duration-100 ease-in-out"
        >{{ section.last_link.text }}</span
      ></nuxt-link
    >
  </div>
</template>
<script>
export default {
  data() {
    return {
      section: this.$settings.sections.facilities,
    };
  },
};
</script>
<style scoped>
.facilities > div:first-child {
}
.facilities > div:first-child div {
  /* margin: 200px 0px 20px 100px; */
}
.facilities > div:first-child h1 {
}
.facilities > div:first-child p {
}
.facilities-links {
}
.facilities-links a {
}

/* .facilities-last-link {
background-color: black;
color: white;
text-decoration: none; 
padding: 15px 40px; 
border: 2px solid black; 
height: 55px;
} */
@keyframes fadeIn {
  0% {
    opacity: 0; /* Start hidden */
    transform: scale(0.95); /* Start slightly smaller */
  }
  100% {
    opacity: 1; /* Fully visible */
    transform: scale(1); /* End at normal size */
  }
}

.fade-in {
  animation: fadeIn 2s forwards; /* Animation duration */
}
</style>
