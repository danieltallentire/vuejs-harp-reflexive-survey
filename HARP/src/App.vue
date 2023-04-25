<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="pure-g">
    <div class="pure-u-1">
      <div class="pure-menu-horizontal">
        <span class="pure-menu-heading">HARP Survey</span>
        <ul class="pure-menu-list">
          <li class="pure-menu-item">
            <RouterLink to="/" class="pure-menu-link">Home</RouterLink>
          </li>
          <li class="pure-menu-item">
            <RouterLink to="/survey" class="pure-menu-link">Survey</RouterLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="pure-u-1 content">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.custom-restricted-width {
        display: inline-block;
    }

    .content {
      height: 95vh;
      display: flex;
      align-items: center;
    }
</style>
