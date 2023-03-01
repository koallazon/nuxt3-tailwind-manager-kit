<script setup lang="ts">
import { useVuelidate } from '@vuelidate/core'
import { maxLength, minLength, required } from '@vuelidate/validators'

const title = 'form'
useHead({
  title,
})

const data1 = ref('')
const data2 = ref('')
const data3 = ref('')
const data4 = ref('')

const forms = ref([
  {
    value: {
      data1,
      data2,
    },
  },
  {
    value: {
      data3,
      data4,
    },
  },
])

const rules = computed(() => ({
  data1: {
    required,
    minLength: minLength(3),
  },
  data2: {
    required,
    minLength: maxLength(5),
  },
  data3: {
    minLength: minLength(3),
  },
  data4: {
    required,
    minLength: minLength(3),
  },
}))

const vValid = useVuelidate(
  rules,
  {
    data1,
    data2,
    data3,
    data4,
  },
  {
    $autoDirty: true,
    $lazy: true,
  }
)
</script>

<template>
  <page-container :title="title">
    <h2>여기는 {{ title }}입니다.</h2>
    <section>
      <ul>
        <li>
          <input v-model="data1" type="text" />
          <div>
            data1: {{ forms[0].value.data1 }}<br />
            <p v-for="(error, idx) in vValid.data1.$error" :key="idx">{{ error }}</p>
          </div>
        </li>
        <li>
          <input v-model="data2" type="text" />
          <p>data2: {{ forms[0].value.data2 }}</p>
          <p>dirty: {{ vValid.data2?.$anyDirty }}</p>
          <p>anyDirty: {{ vValid.data2?.$anyDirty }}</p>
          <p>invalid: {{ vValid.data2?.$invalid }}</p>
          <p>error: {{ vValid.data2?.$error }}</p>
          <p v-for="err in vValid.data2.$errors" :key="err.$uid">{{ err.$message }}</p>
        </li>
        <li>
          <input v-model="data3" type="text" />
          <p>data3: {{ forms[1].value.data3 }}</p>
        </li>
        <li>
          <input v-model="data4" type="text" />
          <p>data4: {{ forms[1].value.data4 }}</p>
        </li>
      </ul>
      <dl>
        <dt>Form</dt>
        <dd>
          <p>dirty: {{ vValid.$dirty }}</p>
          <p>anyDirty: {{ vValid.$anyDirty }}</p>
          <p>invalid: {{ vValid.$invalid }}</p>
        </dd>
      </dl>
    </section>
  </page-container>
</template>

<style scoped>
li {
  margin: 1rem 0;
  min-width: 400px;
}
input {
  color: #000;
}
dl {
  padding: 1rem;
  outline: 1px solid #ccc;
}
dl > dd > p,
li > p,
li > div {
  color: #ccc !important;
}
</style>
