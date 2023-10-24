<template>
     <div class="free_tour">
      <h4>FREE TOUR</h4>

      <h1>{{ $settings.free_tour.text }}</h1>
    </div>
</template>
<script></script>
<style scoped>
.free_tour {
  padding-top: 120px;
  padding-bottom: 120px;
  padding-left: 200px;
  padding-right: 200px;
  background-color: #ccc;

  background-image: url("https://www.houstonmethodist.org/-/media/images/contenthub/article-images/wellness/hub_workdeskposture_article.ashx?mw=1382&hash=A163CE470A78F0217003C164A6723870");

  height: 400px;
  /* Create a parallax effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.free_tour h4 {
  font-size: 18px;
  color: rgb(218, 144, 8);
  font-weight: 600;
}
.free_tour h1 {
  font-size: 50px;
  color: #fff;
  width: 60%;
  padding-top: 10px;
}
</style>