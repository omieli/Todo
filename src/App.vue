<template>
  <v-app id="inspire">
    <v-navigation-drawer 
    v-model="drawer"
    app
    >
      <v-list-item>
        <v-list-item-content>
          <div class="title">
          <v-list-item-title class="text-h6">
            Navigation
          </v-list-item-title>
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        > 
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="primary"
      dark
      shrink-on-scroll
    
      scroll-target="#scrolling-techniques-2"
    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-tooltip right allow-overflow>
      <template v-slot:activator="{ on, attrs }">
      <v-app-bar-nav-icon @click="drawer = !drawer"
        v-bind="attrs"
        v-on="on"
      ></v-app-bar-nav-icon>
          </template>
        <span>Open navigation menu</span>
      </v-tooltip>
      <v-app-bar-title>Todo App</v-app-bar-title>



    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-checkbox-marked-circle-plus-outline', to: '/' },
          { title: 'About', icon: 'mdi-help-box', to: '/about' }
        ]
     }),
     mounted() {
       this.$store.dispatch('getTasks')
     },
  }
</script>
