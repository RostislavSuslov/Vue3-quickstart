<template>
  <component :is="tag" :class="variantClass">
    <slot></slot>
  </component>
</template>
<script setup>
  import {computed} from "vue";

  const props = defineProps({
    tag: {
      type:String,
      default: "p",
    },
    variant: {
      type: String,
      default: 'body',
      validator(value) {
        return ['h1','h2', 'h3', 'body', 'body2', 'caption'].includes(value)
      },
    }
  })

  const variantClass = computed(()=>{
    return {
      h1: 'md:text-5xl text-3xl',
      h2: 'md:text-4xl text-2xl',

    }[props.variant]
  })
</script>
