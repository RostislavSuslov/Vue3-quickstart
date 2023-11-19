<template>
  <PartialsCart>
    <BaseTypography tag="h4" variant="h4">
      3. Ordered lists
    </BaseTypography>
    <ol>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.
        <ol>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
        </ol>
      </li>
      <li>Lorem, ipsum dolor.</li>
      <li>Lorem, ipsum dolor.</li>
    </ol>
  </PartialsCart>
</template>

<script setup>
  import BaseTypography from "@/components/ui/BaseTypography.vue";
  import PartialsCart from "@/components/partials/PartialsCart.vue";
</script>
