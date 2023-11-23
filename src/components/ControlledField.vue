<template>
  <div
      class="input-wrapper relative max-w-screen-md w-full mx-auto p-4 mb-4 border-2 rounded-[4px]"
  >
    <field-wrapper
        :variant="wrapperVariant"
        :label="label"
        :labelPosition="labelPosition"
    >
      <input
          :name="name"
          :type="type"
          v-model="innerValue"
          :value="value"
          class="m-4"
      />
    </field-wrapper>
  </div>
</template>

<script setup>
import FieldWrapper from "@/components/FieldWrapper.vue";
import { useField } from "vee-validate";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "radio",
    validator(value) {
      return ["radio", "checkbox"].includes(value);
    },
  },
  value: null,
  label: String,
  variant: String,
  labelPosition: {
    type: String,
    default: "top",
  },
});
const { value: innerValue, errors } = useField(() => props.name, undefined, {
  type: props.type,
  checkedValue: () => props.value,
});

const wrapperVariant =
    props.variant === "controlledField" ? null : props.variant;

const labelPosition =
    props.labelPosition === "controlledField" ? "right" : props.labelPosition;
</script>
