<template>
  <div id="app">
    <!-- <app-header></app-header> -->
    
    <app-results></app-results>
    <!-- <transition name="fade">
      <router-view></router-view>
    </transition> -->
    
    <!-- <app-footer></app-footer> -->
  </div>
</template>


<script>

import Header from "./components/Shared/header.vue";
import Footer from "./components/Shared/footer.vue";
import Results from "./components/Results/Results.vue";

export default {
  components:{
    "app-header":Header,
    "app-footer":Footer,
    "app-results":Results
  }
}
</script>


<style>

#app{
  width: 100%;
  height: 100%;
  position: relative;
}

/* Adding the transition animation */
.fade-enter{
  opacity: 0;
  height: 0%;
}

.fade-enter-active{
  transition: all 4s ease-in forwards; 
  height: 100%;
}

.fade-leave-active{
  opacity: 0;
}

  
</style>