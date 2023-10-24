<template>
  <div class="how_it_works">
    <div>HOW IT WORKS</div>
    <h1>{{ $settings.itsWorks.title }}</h1>
    <div class="flex">
      <div v-for="item in $settings.itsWorks.works" :key="item.number">
        <div class="number">{{ item.number }}</div>
        <h3>{{ item.title }}</h3>
        <p>{{ item.des }}</p>
        <nuxt-link :to="item">{{ item.text_url }}</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script></script>
<style scoped>
.how_it_works {
  padding-top: 30px;
  margin: 80px 180px;
}
.how_it_works > div:first-child {
  color: rgb(215, 148, 4);
}
.how_it_works h1 {
  font-size: 50px;
  width: 50%;
}
.how_it_works .flex {
  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 50px;
  padding-top: 25px;
}
.how_it_works .flex p {
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
  color: #636161;
}
.how_it_works .flex h3 {
  font-size: 25px;
  padding-top: 20px;
}
.how_it_works .flex .number {
  border: 1px solid gray;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  text-align: center;
  padding: 10px;
  font-size: 30px;
}
</style>
