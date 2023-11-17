<template>
  <div class="border p-8">
    <h4 class="text-title_4">5. Title h1-h6</h4>
    <base-typography tag="h1" variant="h1">
      h1 - Test title <small>Small test</small>
    </base-typography>
    <base-typography tag="h2" variant="h2">
      h2 - Test title <small>Small test</small>
    </base-typography>
    <base-typography variant="h2">
      h2 - Test title <small>Small test</small>
    </base-typography>
    <base-typography tag="div" variant="h2">
      h2 - Test title <small>Small test</small>
    </base-typography>
    <h1>h1 - Test title <small>Small test</small></h1>
    <h2>h2 - Test title <small>Small test</small></h2>
    <h3>h3 - Test title <small>Small test</small></h3>
    <h4>h4 - Test title <small>Small test</small></h4>
    <h5>h5 - Test title <small>Small test</small></h5>
    <h6>h6 - Test title <small>Small test</small></h6>
  </div>
</template>

<script>

import {defineComponent} from "vue";
import BaseTypography from "@/components/ui/BaseTypography.vue";

export default defineComponent({
  components: {BaseTypography}
})
</script>