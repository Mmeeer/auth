<template lang="html">
    <v-layout>
      <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
        <p v-if="error">{{errorMessage}}</p>
        <v-text-field
          label="Username"
          type="text"
          v-model="username"
        >
        </v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
        >
        </v-text-field>
        <v-btn color="success" @click="signup()">Signup</v-btn>
      </v-flex>
    </v-layout>
</template>

<script>
export default {
  data(){
    return{
      username: "",
      password: "",
      error: false,
      errorMessage: ""
    }
  },
  methods:{
    async signup(){
      let res = await this.$axios.$post("http://localhost:8080/signup", {username: this.username, password: this.password})
      console.log(res);
      if(res.success){

      } else {
        this.errorMessage = res.data.message;
        this.error = true;
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
