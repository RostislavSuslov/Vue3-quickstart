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
        return ['h1','h2', 'h3', 'h4', 'h5', 'h6', 'body', 'body2', 'caption'].includes(value)
      },
    }
  })

  const variantClass = computed(()=>{
    return {
      h1: 'md:text-5xl text-4xl',
      h2: 'md:text-4xl text-3xl',
      h3: 'md:text-3xl text-2xl',
      h4: 'md:text-2xl text-xl',
      h5: 'md:text-xl text-lg',
      h6: 'md:text-lg text-base',
      caption: 'md:text-4xl text-3xl',

    }[props.variant]
  })
</script>
