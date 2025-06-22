<script>
export default {
  name: 'App',
  data() {
    return {
      name: '',
      checked: false,
      age: 25,
      text: '',
      option: 'apple',
      items: [],
      gender: 'male',
      color: '#ffffff',
    }
  },
  methods: {
    handleInput(e) {
      this.name = e.target.value
    },
  },
}
</script>
<template>
  <form>
    <h1>1번 문제</h1>
    <h1>name: {{ name }}</h1>
    <input type="text" @input="handleInput" />
  </form>
  <form>
    <h1>2번 문제</h1>
    <h1>동의하시겠습니까? {{ checked ? '동의' : '비동의' }}</h1>
    <input type="checkbox" name="약관동의" id="동의" v-model="checked" />동의하십니까?
  </form>
  <form>
    <h1>3번 문제</h1>
    <h1>나이: {{ age }}</h1>
    <input type="range" name="나이" id="age" v-model="age" min="1" max="100" />
  </form>
  <form>
    <h1>4번 문제</h1>
    <h1>{{ text }}</h1>
    <textarea v-model="text"></textarea>
  </form>
  <form>
    <h1>5번 문제</h1>
    <h1>{{ option }}</h1>
    <select v-model="option">
      <option value="apple">사과</option>
      <option value="banana">바나나</option>
      <option value="orange">오렌지</option>
    </select>
  </form>
  <form>
    <h1>6번 문제</h1>
    <h1>{{ items.join(',') }}</h1>
    <label>
      <input type="checkbox" v-model="items" value="apple" />사과
      <input type="checkbox" v-model="items" value="banana" />바나나
      <input type="checkbox" v-model="items" value="orange" />오렌지
    </label>
  </form>
  <form>
    <h1>7번 문제</h1>
    <h1>{{ gender }}</h1>
    <input type="radio" name="gender" value="male" v-model="gender" /> 남성
    <input type="radio" name="gender" value="female" v-model="gender" />여성
  </form>
  <form>
    <h1>8번 문제</h1>
    <h1></h1>
    <input type="color" v-model="color" />
    <div
      :style="{
        width: ' 100px',
        height: ' 100px',
        border: ' 1px solid black',
        backgroundColor: color,
      }"
    ></div>
    <p>{{ color }}</p>
  </form>
</template>
<style scoped></style>
