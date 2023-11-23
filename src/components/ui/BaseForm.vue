<template>
  <div>

    <form
        @submit="onSubmit"
        class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
    >
      <text-field
          type="email"
          name="email"
          label="Email"
          placeholder="Your email"
      />
      <text-field
          name="phoneNumber"
          type="phone"
          label="Phone"
          placeholder="(999) 99-99-999"
          mask="'+38 (000)-00-00-000'"
      />
      <password-field
          :type="showPassword ? 'text' : 'password'"
          name="password"
          label="password"
          placeholder="Your password"
      />
      <password-field
          :type="showPassword ? 'text' : 'password'"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm password"
      />
      <div class="flex items-center my-2">
        <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-green-500"
            id="togglePassword"
            v-model="showPassword"
        />
        <label for="togglePassword" class="ml-2">Show Password</label>
      </div>
      <BaseButton :disabled="loading">Submit</BaseButton>
      <pre>{{ errors }}</pre>
      <pre>{{ values }}</pre>
    </form>

    <teleport to="body">
      <BaseModal
          :open-modal="openModal"
          @confirm="submitForm"
          @update:open-modal="onChangeModal"
      />
    </teleport>
  </div>
</template>
<script setup>
import * as yup from "yup";
import "yup-phone";
import { useForm } from "vee-validate";
import { ref } from "vue";

import TextField from "@/components/ui/TextField.vue";
import PasswordField from "@/components/ui/PasswordField.vue";
import BaseModal from "@/components/ui/BaseModal.vue";
import randomGenerator from "@/utils/randomGenerator";
import BaseButton from "@/components/ui/BaseButton.vue";

defineProps({
  modelValue: String,
});

const loading = ref(false);
const showPassword = ref(false);
const openModal = ref(false);

const initialValue = {
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
};

const { handleSubmit, values, errors, resetForm } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    email: yup.string().required().email(),
    phoneNumber: yup.string().required().min(13),
    password: yup.string().required().min(6),
    confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref("password")]),
  }),
});

const submitForm = async () => {
  loading.value = true;

  try {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (randomGenerator()) {
          resolve();
          return;
        }
        reject("myError");
      }, 800);
    });

    console.log(JSON.stringify(values, null, 2));
    resetForm();
  } catch (error) {

    console.log(error);
  } finally {
    loading.value = false;
  }
};
const onChangeModal = (newVal) => {
  openModal.value = newVal;
};

const onSubmit = handleSubmit(() => {
  onChangeModal(true);
});
</script>