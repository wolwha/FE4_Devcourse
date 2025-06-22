<script>
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  data() {
    return {
      inputNumber: 0,
      calcArr: [0],
      calculated: 0,
      usingDot: [],
    };
  },
  components: {
    Calculator,
  },
  methods: {
    handleAC() {
      this.inputNumber = 0;
      this.calcArr = [0];
      this.usingDot = [];
      console.log("0이지롱");
    },
    handleNumber(amount) {
      if (this.inputNumber === 0) {
        this.inputNumber = amount;
        console.log("숫자가 눌렸습니다");
      } else if (this.usingDot.includes(".")) {
        this.usingDot.push(amount);
        this.inputNumber = this.usingDot.join("");
      } else if (this.inputNumber > 0 && !this.usingDot.includes(".")) {
        this.inputNumber = this.inputNumber * 10 + amount;
      } else if (this.inputNumber < 0 && !this.usingDot.includes(".")) {
        this.inputNumber = this.inputNumber * 10 - amount;
      } else if (this.inputNumber.includes(".")) {
      }
    },
    calculateNumber(amount) {
      if (this.calcArr[0] === 0) {
        if (this.inputNumber > 0) {
          this.calcArr.shift();
        } else if (this.calcArr[this.calcArr.length - 1] === 0) {
          return;
        }
      }
      if (this.inputNumber > 0 || this.inputNumber < 0) {
        this.calcArr.push(this.inputNumber);
        this.calcArr.push(amount);
        this.inputNumber = 0;
      } else if (this.calcArr[1] !== 0) {
        this.calcArr.push(amount);
        this.inputNumber = 0;
      } else {
        return;
      }
      if (this.calcArr.length > 2) {
        this.calcResult();
        this.calcArr.push(amount);
      }
      this.usingDot = [];
    },
    buttonDot() {
      if (this.usingDot.includes(".")) {
        return;
      }
      this.usingDot.push(this.inputNumber);
      this.usingDot.push(".");
      this.inputNumber = this.usingDot.join("");
    },
    calcResult() {
      if (this.calcArr[this.calcArr.length - 1] === "+") {
        this.calcArr.push(this.inputNumber);
      } else if (this.calcArr[this.calcArr.length - 1] === "-") {
        this.calcArr.push(this.inputNumber);
      } else if (this.calcArr[this.calcArr.length - 1] === "×") {
        this.calcArr.push(this.inputNumber);
      } else if (this.calcArr[this.calcArr.length - 1] === "÷") {
        this.calcArr.push(this.inputNumber);
      } else {
        return;
      }
      console.log(this.calcArr.join(""));
      if (this.calcArr.includes("×")) {
        this.calculated = eval(this.calcArr.join("").replace("×", "*"));
      } else if (this.calcArr.includes("÷")) {
        this.calculated = eval(this.calcArr.join("").replace("÷", "/"));
      } else {
        this.calculated = eval(this.calcArr.join(""));
      }
      this.calculated =
        Math.round((this.calculated + Number.EPSILON) * 1000000000000) /
        1000000000000;
      this.calcArr = [];
      this.calcArr.push(this.calculated);
      this.inputNumber = 0;
    },
    handleDelete() {
      this.inputNumber = Math.floor(this.inputNumber / 10);
    },
  },
};
</script>

<template>
  <div class="app-container">
    <Calculator
      :inputNumber
      :calcArr
      :handleAC="handleAC"
      :handleNumber="handleNumber"
      :calculateNumber="calculateNumber"
      :calcResult="calcResult"
      :buttonDot="buttonDot"
      :handleDelete="handleDelete"
    />
  </div>
</template>

<style>
:root {
  --primary-color: #ff9f0a;
  --bg-light: #f2f2f7;
  --bg-dark: #1c1c1e;
  --text-light: #000000;
  --text-dark: #ffffff;
}

/* Apply dark mode styles */
@media (prefers-color-scheme: dark) {
  body {
    background-color: var(--bg-dark);
    color: var(--text-dark);
  }
}

body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
  background-color: var(--bg-light);
  color: var(--text-light);
  transition: background-color 0.3s, color 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.app-container {
  max-width: 480px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

h1 {
  margin-bottom: 2rem;
  font-weight: 500;
  letter-spacing: -0.025em;
  font-size: 2rem;
}

footer {
  margin-top: 2rem;
  font-size: 0.8rem;
  opacity: 0.7;
}

@media (max-width: 480px) {
  .app-container {
    padding: 1rem;
  }

  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
</style>

<!-- 수정할 부분
  연산자 누르면 이전 수식 연산값 출력 <- 완료
  결과 이전에 연산자를 누르지 않았을 때 숫자를 누르고 연산자를 누르면 결과값 뒤에 배열로 추가되는 문제
  del 누르면 맨 뒤 숫자 제거 <- 완료
-->
