<template>
    <div>
      <header>
      <img
        :src="$settings.logo ? $settings.logo.src : ''"
        alt="logo"
        class="w-16 h-16 rounded-full"
      />
      <nav>
        <ul v-if="menu" id="menu" class="parent-list">
          <li v-for="(item, key) in menu.items" :key="key">
            <nuxt-link :to="item.url">{{ item.text }}</nuxt-link>
            <!-- Check if the item has children -->
            <ul v-if="item.childrens" class="child-list">
              <li
                v-for="(childItem, childKey) in item.childrens"
                :key="childKey"
              >
                <nuxt-link :to="childItem.url">{{ childItem.text }}</nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
        <a href="#" class="button-started">Get Started</a>
      </nav>
    </header>
    </div>
</template>
<script>
export default {
  data() {
    return {
      menu: null,
      
    };
  
  },
  mounted(){
    this.menu = this.$settings.menus; // Assign the menu data from $settings
    // console.log("header: "+this.menu)
  }
  }
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap");

header {
  background-color: #ffffff; /* Change the background color to your preference */
  padding: 30px 20px;
  color: #636161; /* Change the text color to your preference */
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Style the logo image */
header img {
  display: block;
  width: 178px; /* Adjust the width as needed */
  height: 60px; /* Adjust the height as needed */
}

/* Style the navigation menu */
header nav {
  display: flex;
  align-items: center;
}

/* Style the parent list */

/* Style the child list */

/* Style the child list items */

/* Style the Get Started link */
header ul a {
  display: block;
  text-decoration: none;

  color: #838282; /* Change the text color to your preference */
  padding: 5px 20px;

  margin: 0 20px;
}
.button-started {
  background-color: black;
  color: #ffffff;
  text-decoration: none;

  padding: 10px 20px;

  margin: 0 20px;
}
ul {
  display: flex;
}
/* Hover effect for Get Started link */
/* header a:hover {
  background-color: #0056b3; Change the background color on hover
} */

/* Style the parent list items */
.parent-list li {
  position: relative;
  margin: 0 15px; /* Add some spacing between list items */
  cursor: pointer;
}

/* Style the child list (hidden by default) */
.child-list {
  list-style: none;
  padding: 0;
  display: none; /* Hide the child list by default */
  position: absolute;
  top: 140%;
  left: 0;
  background-color: #0c0c0c; /* Background color for child list */
}

/* Style the child list items */
.child-list li {
  width: 180px;
  padding: 0px;
}

/* Display the child list when hovering over the parent list item */
.parent-list li:hover .child-list {
  display: block;
}
</style>