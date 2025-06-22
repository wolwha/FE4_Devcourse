<script>
export default {
  name: 'App',
  data() {
    return {
      numArr: [1, 2, 3, 4, 5],
      count: 0,
    }
  },
  methods: {
    // 반복출력하면 반복될때마다 연산
    evenSum1(numArr) {
      return numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  computed: {
    // 반복출력해도 한번만 연산 => 값을 메모이제이션
    // 메모이제이션이 풀리는 조건: 참조하고 있는 데이터의 값에 변화가 있을때
    evenSum() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
    evenSum2() {
      return this.numArr.filter((num) => num % 2 === 0).reduce((acc, cur) => acc + cur, 0)
    },
  },
  watch: {
    // 특정 데이터의 변경사항을 감지
    // 감지할 데이터의 속성명을 그대로 사용
    // 내부적으로 두개의 값을 받음. 매개변수의 이름은 커스텀 가능
    count(newValue, oldValue) {
      console.log('변경됨', newValue, oldValue)
    },
    numArr(n, o) {
      console.log(n, o)
    },
    // numArr() {
    //   // 배열은 주소값을 가지고 있기 때문에 배열이 바뀌어도 주소값은 그대로라 콘솔이 출력되지 않음
    //   console.log('numArr 변경됨')
    // },
    // numArr: {
    //   // 깊은 참조
    //   handler(n, o) {
    //     console.log('변경됨')
    //     console.log(n)
    //     console.log(o)
    //     // 참조값이 변경되지 않아 이전값과 현재값이 제대로 반영되지 않음
    //   },
    //   deep: true, // 참조값이 바뀌지 않아도 내부값을 확인
    // },
  },
}
</script>
<template>
  <!-- 템플릿 안에서는 연산을 하지 않기 -->
  <h1>EvenSum: {{ evenSum }}</h1>
  <h1>EvenSum: {{ evenSum1(numArr) }}</h1>
  <button @click="numArr.push(8)">클릭</button>
  <h1>Count: {{ count }}</h1>
  <button @click="count += 1">클릭</button>
  <h1>{{ numArr }}</h1>
  <button @click="numArr = [...numArr, 3]">추가</button>
  <!-- <h1>EvenSum: {{ evenSum2() }}</h1> -->
</template>
<style scoped></style>
<!-- computed의 값을 methods에서도 사용이 가능하다 -->
