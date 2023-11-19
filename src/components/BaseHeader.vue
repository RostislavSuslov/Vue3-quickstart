<template>
    <header class="py-6">
      <BaseContainer class="flex ">
        <BaseLogo />
        <nav class="w-full justify-center">
          <ul class="flex">
            <li class="mx-2">
              <RouterLink to="/" class="px-4">Home</RouterLink>
            </li>
            <li class="mx-2">
              <RouterLink to="/about" class="px-4">About</RouterLink>
            </li>
            <li class="mx-2">
              <RouterLink to="/Style-guide" class="px-4">Style guide</RouterLink>
            </li>
          </ul>
        </nav>
      </BaseContainer>
    </header>
</template>
<script setup>
  import BaseContainer from "@/components/partials/BaseContainer.vue";
  import BaseLogo from "@/components/ui/BaseLogo.vue";
</script>