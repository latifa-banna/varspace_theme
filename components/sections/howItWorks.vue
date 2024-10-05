<template>
  <div class="px-[20px] lg:px-[40px] pt-[100px] pb-[55px] bg-[#FAF7F0]">
    <div
      class="text-[14px] md:text-[15px] text-[rgb(255,131,26)] block font-epilogue font-semibold leading-[28.8px] pb-[14.4px] mt-0 mr-0 uppercase tracking-[4px] box-border not-italic"
    >
      {{ section.text }}
    </div>
    <h1
      class="box-border w-[100%] text-[32px] lg:w-[43%] text-black block font-epilogue md:text-[37px] md:w-[72%] lg:text-[45px] font-medium md:leading-[67.5px] m-0 p-0 no-underline pb-[14.4px]"
    >
      {{ section.title }}
    </h1>
    <div
      class="flexx grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 pt-6"
    >
      <div
        v-for="item in section.items"
        :key="item.number"
        class="pb-10 lg:pb-0"
      >
        <div
          class="border border-gray-500 rounded-full w-[70px] h-[70px] text-center p-2.5 text-[28px]"
        >
          {{ item.number }}
        </div>
        <h3
          class="box-border text-black block font-epilogue text-[18px] md:text-[19px] lg:text-[21px] font-medium leading-[27px] md:leading-[28.5px] lg:leading-[31.5px] mb-0 mt-0 pt-[20px]"
        >
          {{ item.title }}
        </h3>
        <p
          class="block text-[#7a7a7a] font-inter text-[15px] lg:text-[16px] font-normal leading-[27px] lg:leading-[28.8px] my-[14.4px]"
        >
          {{ item.description }}
        </p>

        <button
          @click="flipped = true"
          class="flex justify-start items-center text-black border-b-2 pl-0 hover:text-[#ff831a] hover:border-[#ff831a]  lg:p-0"
        >
          <!-- <span>&ensp;</span> -->
          <div class="w-full flex justify-start items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="22px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#000000"
            >
              <path
                d="m583-235-20-19 213-213H132v-28h645L564-708l19-19 246 246-246 246Z"
              />
            </svg>
            <span
              class="block bg-transparent font-epilogue text-[13px] font-semibold leading-[13px] text-center cursor-pointer ml-1"
            >
              {{ item.text_url }}
            </span>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      section: this.$settings.sections.itsWorks,
    };
  },
};
</script>
<style scoped></style>
