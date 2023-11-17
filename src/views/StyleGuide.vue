<template>
  <div class="container px-4 mx-auto">
    <h1 class="text-title_1 mb-4 pt-2">Style Guide</h1>
    <div class="grid grid-cols-3 grid-rows-3 gap-8">
      <BaseColors/>
      <BaseText/>
      <BaseOrderList/>
      <BaseUnorderedList/>
      <BaseFontFamily/>
      <BaseFontWeight/>
      <BaseTitle/>
    </div>
  </div>
</template>

<script setup>
  import BaseColors from "@/components/ui/BaseColors.vue";
  import BaseText from "@/components/ui/BaseText.vue";
  import BaseOrderList from "@/components/ui/BaseOrderedList.vue";
  import BaseUnorderedList from "@/components/ui/BaseUnorderedList.vue";
  import BaseFontFamily from "@/components/ui/BaseFontFamily.vue";
  import BaseFontWeight from "@/components/ui/BaseFontWeight.vue";
  import BaseTitle from "@/components/ui/BaseTitle.vue";
</script>

