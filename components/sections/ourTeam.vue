<template>
    <div class="px-[20px] md:px-[40px] pb-[50px] py-[90px] md:pb-[50px]">
      <div>
        <div class="pt-[0px] pb-[40px] md:flex flex-wrap justify-between items-center md:text-left text-center max-w-full">
          <div>
            <div  class=" text-[14px] md:text-[15px] text-[rgb(255,131,26)] block font-epilogue font-semibold	leading-[28.8px] pb-[14.4px] mt-0 mr-0 uppercase tracking-[4px] box-border not-italic">{{ $settings.sections.about.our_team.text }}</div>
            <div class="box-border  w-[100%]  text-[32px] lg:w-[70%] text-black block font-epilogue md:text-[37px] md:w-[72%] lg:text-[45px] font-medium  md:leading-[67.5px] m-0 p-0 no-underline pb-[14.4px]">{{ $settings.sections.about.our_team.title }}</div>
          </div>

              <nuxt-link :to=" $settings.sections.about.our_team.url_button " class="
               button-url-a
              ">{{ $settings.sections.about.our_team.text_button }}</nuxt-link>
        </div>
    </div>
    <div class="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2  lg:h-[60vh]"> <!-- Set height of parent in vh -->
  <div
    v-for="(item, index) in $settings.sections.about.our_team.items"
    :key="index"
    class="text-center flex-grow md:w-full lg:max-w-[287px]"
  >
    <!-- Image section -->
    <div class="mb-4">
      <img
        :src="item.image ? item.image.src : ''"
        :alt="item.name"
        class="w-full max-h-[70%] object-cover" >
    </div>

    <!-- Team member details -->
    <div>
      <!-- Name and position -->
      <div class="flex flex-wrap justify-between pb-1">
        <div
          class="box-border text-black block font-epilogue
          lg:text-[21px] lg:leading-[31.5px]
          md:text-[19px] md:leading-[28.5px]
          text-[18px] leading-[27px] m-0 p-0 no-underline font-medium text-left"
        >
          {{ item.name }}
        </div>

        <!-- Social icons -->
        <div class="flex space-x-4">
          <nuxt-link to="">
            <svg
              class="w-4 h-4 text-[#ff831a]"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
              />
            </svg>
          </nuxt-link>
          <nuxt-link to="">
            <svg
              class="w-4 h-4 text-[#ff831a]"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
              />
            </svg>
          </nuxt-link>
          <nuxt-link to="">
            <svg
              class="w-4 h-4 text-[#ff831a]"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10 9C10.7956 9 11.5587 8.68393 12.1213 8.12132C12.6839 7.55871 13 6.79565 13 6C13 5.20435 12.6839 4.44129 12.1213 3.87868C11.5587 3.31607 10.7956 3 10 3C9.20435 3 8.44129 3.31607 7.87868 3.87868C7.31607 4.44129 7 5.20435 7 6C7 6.79565 7.31607 7.55871 7.87868 8.12132C8.44129 8.68393 9.20435 9 10 9ZM3 18C3 17.0807 3.18106 16.1705 3.53284 15.3212C3.88463 14.4719 4.40024 13.7003 5.05025 13.0503C5.70026 12.4002 6.47194 11.8846 7.32122 11.5328C8.1705 11.1811 9.08075 11 10 11C10.9193 11 11.8295 11.1811 12.6788 11.5328C13.5281 11.8846 14.2997 12.4002 14.9497 13.0503C15.5998 13.7003 16.1154 14.4719 16.4672 15.3212C16.8189 16.1705 17 17.0807 17 18H3Z"
              />
            </svg>
          </nuxt-link>
        </div>
      </div>

      <div
        class="box-border text-[rgb(84,89,95)] font-epilogue
        text-[13px] font-semibold tracking-[1px]
        uppercase lg:leading-[28.8px] leading-[27px]
        mb-[14.4px] mt-0 mx-0 flex justify-start"
      >
        {{ item.fonction }}
      </div>
    </div>
  </div>
</div>




    </div>
  </template>
  
<script></script>