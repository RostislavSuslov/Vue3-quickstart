<template>
  <PartialsCart>
    <BaseTypography tag="h4" variant="h4">
      4. Unordered lists
    </BaseTypography>
    <ul>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.
        <ul>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ul>
      </li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
    </ul>
  </PartialsCart>
</template>

<script setup>
  import BaseTypography from "@/components/ui/BaseTypography.vue";
  import PartialsCart from "@/components/partials/PartialsCart.vue";
</script>
