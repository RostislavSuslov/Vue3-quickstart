<template>
  <div>
    <label>Second input</label>
    <input
        type="text"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        class="border border-gray-600"
    />
    <teleport to="body">
      <custom-modal
          :open-modal="openModal"
          @confirm="submitForm"
          @update:open-modal="onChangeModal"
      />
    </teleport>
    <form
        @submit="onSubmit"
        class="flex flex-col items-center border-2 px-6 py-10 max-w-xl mx-auto mb-6 rounded-[4px]"
    >
      <label>Select your role:</label>
      <controlled-field
          variant="outlined"
          name="person"
          :label="key"
          v-for="(value, key) in PERSONS"
          :value="value"
          :key="value"
      />
      <text-field
          type="email"
          name="email"
          label="Email"
          placeholder="Your email"
      />
      <component :is="activeFields" />
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

      <button
          :disabled="loading"
          class="w-full disabled:bg-gray-500 py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-sans rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Submit
      </button>
      <pre>{{ errors }}</pre>
      <pre>{{ values }}</pre>
    </form>
  </div>
</template>
<script setup>
import * as yup from "yup";
import "yup-phone";
import { useForm } from "vee-validate";
import { computed, ref } from "vue";
import ControlledField from "@/components/ControlledField.vue";
import TextField from "@/components/TextField.vue";
import PasswordField from "@/components/PasswordField.vue";
import RolesFormTeacher from "@/components/RolesFormTeacher.vue";
import RolesFormStudent from "@/components/RolesFormStudent.vue";
import CustomModal from "@/components/CustomModal.vue";
import randomGenerator from "@/utils/randomGenerator";

defineProps({
  modelValue: String,
});

const emit = defineEmits(["success", "error", "update:modelValue"]);

const showPassword = ref(false);

const PERSONS = {
  Teacher: "Teacher",
  Student: "Student",
};

const tabs = {
  [PERSONS.Teacher]: RolesFormTeacher,
  [PERSONS.Student]: RolesFormStudent,
};

const initialValue = {
  person: PERSONS.Teacher,
  name: "",
};

const { handleSubmit, values, errors, resetForm } = useForm({
  initialValues: initialValue,
  validationSchema: yup.object({
    email: yup.string().required().email(),

    phoneNumber: yup.string().when("person", {
      is: PERSONS.Teacher,
      then: (schema) => schema.required().min(13),
    }),

    series_passport: yup.string().when("person", {
      is: PERSONS.Teacher,
      then: (schema) => schema.required().min(8),
    }),

    password: yup.string().required().min(6),

    confirmPassword: yup
        .string()
        .required()
        .min(6)
        .oneOf([yup.ref("password")]),
  }),
});

const activeFields = computed(() => {
  return tabs[values.person];
});

const openModal = ref(false);
const loading = ref(false);
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
      }, 300);
    });
    emit("success");
    resetForm();
    console.log(JSON.stringify(values, null, 2));
  } catch (error) {
    emit("error");
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