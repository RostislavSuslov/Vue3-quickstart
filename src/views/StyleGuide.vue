<template>
  <BaseContainer>
    <BaseTypography tag="h1" variant="h1">
      Style Guide
    </BaseTypography>
    <div class="grid xl:grid-cols-3 xl:grid-rows-3 lg:grid-cols-2 lg:grid-rows-2 grid-cols-1 grid-rows-1 gap-8">
      <BaseAllButtons/>
      <BaseColors/>
      <BaseText/>
      <BaseOrderList/>
      <BaseUnorderedList/>
      <BaseFontFamily/>
      <BaseFontWeight/>
      <BaseTitle/>
    </div>
  </BaseContainer>
</template>

<script setup>
  import BaseColors from "@/components/ui/BaseColors.vue";
  import BaseText from "@/components/ui/BaseText.vue";
  import BaseOrderList from "@/components/ui/BaseOrderedList.vue";
  import BaseUnorderedList from "@/components/ui/BaseUnorderedList.vue";
  import BaseFontFamily from "@/components/ui/BaseFontFamily.vue";
  import BaseFontWeight from "@/components/ui/BaseFontWeight.vue";
  import BaseTitle from "@/components/ui/BaseTitle.vue";
  import BaseContainer from "@/components/partials/BaseContainer.vue";
  import BaseTypography from "@/components/ui/BaseTypography.vue";
  import PartialsCart from "@/components/partials/PartialsCart.vue";
  import BaseButton from "@/components/ui/BaseButton.vue";
  import BaseAllButtons from "@/components/ui/BaseAllButtons.vue";

</script>

