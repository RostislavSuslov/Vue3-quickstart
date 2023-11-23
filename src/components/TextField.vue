<template>
  <field-wrapper :label="label" :errors="errors">
    <input
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :class="fieldClasses"
        v-model="innerValue"
    />
    <!--      v-model="innerValue"  it was in the input on tape 10-->
  </field-wrapper>
</template>

<script setup>
import FieldWrapper from "@/components/FieldWrapper.vue";
import { useField } from "vee-validate";
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "text",
  },
  label: String,
  placeholder: String,
  modelValue: String,
  validationSchema: null,
  syncVModel: Boolean,
});
defineEmits(["update:modelValue"]);

const { value: innerValue, errors } = useField(
    () => props.name,
    props.validationSchema,
    {
      syncVModel: props.syncVModel,
    },
);

// const innerValue = computed({
//   get() {
//     return props.name ? value.value : props.modelValue;
//   },
//   set(newVal) {
//     if (props.name) {
//       value.value = newVal;
//       return;
//     }
//     emit("update:modelValue", newVal);
//   },
// });

const fieldClasses =
    "peer block min-h-[auto] w-full rounded ring-1 bg-transparent px-3 py-[0.32rem] leading-[1.6] placeholder-black::placeholder outline-none transition-all duration-200 ease-linear motion-reduce:transition-none";
</script>

<!--
1. прийняти пропс.
2. Зробити двустороню прив'язку, через useForm, та modelValue
-->