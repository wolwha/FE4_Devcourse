<script>
export default {
  name: 'App',
  data() {
    return {
      email: '',
      password: '',
      fruit: '',
      checked: true,
      check: true,
      fruits: [],
      gender: 'male',
      className: 'a',
      text: '',
      drink: '',
      price: 0,
    }
  },
  methods: {
    changeHandler(e) {
      this.email = e.target.value
    },
    handleSubmit() {
      console.log(this.email)
      console.log(this.password)
    },
    handleChange(e) {
      this.text = e.target.value
    },
    handleDrinkChange() {
      if (this.drink === 'americano') this.price = 1000
      else if (this.drink === 'latte') this.price = 1500
      else if (this.drink === 'juice') this.price = 2000
    },
  },
}
</script>
<template>
  <!-- 이벤트 수식어(modifier) -->
  <!-- 이벤트의 처리 방식을 제어하는 데 사용하는 기능 -->
  <!-- 뷰는 메모이제이션을 자동으로 처리해줌 -->
  <!-- v-memo: 중복 계산을 피할 수 있는 디렉티브 -->
  <!-- v-once와 v-memo는 같이 사용할 필요가 없다. -->
  <!-- v-model: 데이터를 양방향으로 바인딩하기 위한 디렉티브 -->
  <!-- 뷰는 실시간 처리는 @input을 써야하지만 그 이외에는 거의 다 v-model로 처리가 가능하다 -->
  <h1>email: {{ email }}</h1>
  <h1>password: {{ password }}</h1>
  <h1>fruit: {{ fruit }}</h1>
  <h1>checked: {{ checked }}</h1>
  <h1>check: {{ check }}</h1>
  <input type="text" @input="changeHandler" />
  <br />
  <input type="text" v-model="email" />
  {{ email.length }}
  <form @submit.prevent="handleSubmit">
    <input type="datetime-local" name="email" v-model="email" />
    <br />
    <input type="text" name="email" v-model="email" />
    <br />
    <input type="password" name="email" v-model="password" />
    <button>전송</button>
    <br />
    <select v-model="fruit">
      <option value="apple">apple</option>
      <option value="banana">banana</option>
      <option value="orange">orange</option>
    </select>
    <br />
    <button>전송</button>
    <br />
    <input type="checkbox" v-model="checked" />
    <label>
      <input type="checkbox" v-model="check" true-value="apple" false-value="banana" />
    </label>
  </form>
  <p>선택한 과일: {{ fruits }}</p>
  <p></p>
  <div>
    <label><input type="checkbox" v-model="fruits" value="사과" />사과</label>
    <label><input type="checkbox" v-model="fruits" value="바나나" />바나나</label>
    <label><input type="checkbox" v-model="fruits" value="오렌지" />오렌지</label>
  </div>
  <p>선택한 성별: {{ gender }}</p>
  <p></p>
  <div>
    <label><input type="radio" name="gender" id="male" v-model="gender" />남자</label>
    <label><input type="radio" name="gender" id="female" v-model="gender" />여자</label>
  </div>
  <p>선택한 반: {{ className }}</p>
  <p></p>
  <div>
    <label><input type="radio" name="className" id="a반" v-model="className" />a반</label>
    <label><input type="radio" name="className" id="b반" v-model="className" />b반</label>
  </div>
  <!-- submit, click, input, change, keydown + .enter 이벤트 -->
  <h1>{{ text }}</h1>
  <form @submit.prevent></form>
  <button @click="console.log('hello')">클릭</button>
  <input type="text" @input="handleChange" />
  <h1>{{ drink }} / {{ price }}</h1>
  <select v-model="drink" @change="handleDrinkChange">
    <option value="americano">아메리카노(1000)</option>
    <option value="latte">라떼(1500)</option>
    <option value="juice">주스(2000)</option>
  </select>
</template>
<style scoped></style>
