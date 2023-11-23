<template>
  <PartialsCart>
    <BaseTypography tag="h4" variant="h4">
        Base all buttons
    </BaseTypography>
    <div class="flex flex-wrap gap-2">
      <BaseButton color="primary" :right-icon="FireIcon" >Submit</BaseButton>
      <BaseButton color="primary" :loading="isSubmitting">Submit</BaseButton>
      <BaseButton color="primary" :left-icon="FireIcon" >Submit</BaseButton>

      <BaseButton color="primary" variation="outlined" :right-icon="FireIcon" >Submit</BaseButton>
      <BaseButton color="primary" variation="outlined" :loading="isSubmitting">Submit</BaseButton>
      <BaseButton color="primary" variation="outlined" :left-icon="FireIcon" >Submit</BaseButton>

      <BaseButton color="secondary" :right-icon="FireIcon" >Submit</BaseButton>
      <BaseButton color="secondary" :loading="isSubmitting">Submit</BaseButton>
      <BaseButton color="secondary" :left-icon="FireIcon" >Submit</BaseButton>

      <BaseButton color="secondary" variation="outlined" :right-icon="FireIcon" >Submit</BaseButton>
      <BaseButton color="secondary" variation="outlined" :loading="isSubmitting">Submit</BaseButton>
      <BaseButton color="secondary" variation="outlined" :left-icon="FireIcon" >Submit</BaseButton>

      <BaseButton color="success" :right-icon="FireIcon" loading>Submit</BaseButton>
    </div>
  </PartialsCart>
</template>

<script setup>
import {FireIcon} from '@heroicons/vue/20/solid'
import PartialsCart from "@/components/partials/PartialsCart.vue";
import BaseTypography from "@/components/ui/BaseTypography.vue";
import BaseButton from "@/components/ui/BaseButton.vue";
</script>

