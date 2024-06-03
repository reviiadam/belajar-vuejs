<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<script>

export default {
  name: "App",
  head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function() {
      return {
        inner: "CBS",
        separator: "|",
        complement: `Bootcamp`,
      };
    },
    // link: function() {
    //   return [
    //     {
    //       rel: "icon",
    //       sizes: "16x16",
    //       href: this.favicon_app,
    //     },
    //   ];
    // },
  },
}

</script>
