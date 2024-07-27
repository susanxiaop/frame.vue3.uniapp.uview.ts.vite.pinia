import { defineStore } from "pinia";

const useLogin = defineStore("login", {
  state() {
    return {
      teststr: "sadfasdf",
    };
  },
  actions: {
    setStr(newStr: string) {
      this.teststr = newStr;
    },
  },
});

export { useLogin };
