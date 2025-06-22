<script>
import CustomerListItem from './CustomerListItem.vue'

export default {
  name: 'CustomerList',
  components: {
    CustomerListItem,
  },
  props: {
    customers: {
      type: Array,
      required: true,
    },
    showAll: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    displayedCustomer() {
      return this.showAll ? this.customers : this.customers.slice(0, 5)
    },
  },
}
</script>
<template>
  <div class="flow-root">
    <ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
      <!-- <CustomerListItem
        v-for="customer in displayedCustomer"
        :key="customer.id"
        :customer="customer"
      /> -->
      <li
        is="vue:customer-list-item"
        v-for="customer in displayedCustomer"
        :key="customer.id"
        :customer="customer"
      />
      <!-- vue: 를 사용하는 경우는 HTML태그로 대체할 수 없는 경우에 사용 예) ul태그와 ol태그는 li태그만 올 수 있다. tr태그는 div와 article의 태그가 될 수 없다. 이런 케이스 외에는 컴포넌트를 사용한다. -->
    </ul>
  </div>
</template>
<style scoped></style>
