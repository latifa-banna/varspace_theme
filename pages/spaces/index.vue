<template>
    <div>
        <sections-collections v-if="$settings.sections.collections.active"></sections-collections>
    <template v-for="i in 5">
      <sections-products :key="i" :data-key="i" v-if="$settings.sections[`products_${i}`].active" :section="$settings.sections[`products_${i}`]"></sections-products>
    </template>
    <sections-facilities></sections-facilities>
    <sections-browseSpace></sections-browseSpace>
    <sections-howItWorks></sections-howItWorks>

    </div>
</template>
<script></script>