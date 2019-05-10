<template lang="html">
  <v-layout>
    <v-flex xs12 sm6 offset-sm3 md4 offset-md4>
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
      <v-btn color="success" @click="login()">login</v-btn>
      {{$store.state.token}}
      {{$store.state._id}}
      {{amITyping}}
      <button type="button" @click="changeIt" name="button">Hello</button>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'funny',
  data(){
    return{
      username: "",
      password: "",
      isTyping: false
    }
  },
  watch:{
    username(val){
      console.log("i am watching you")
      if(val.length > 0) this.isTyping = true;
      else this.isTyping = false;
    },
  },
  computed:{
    amITyping(){
      if(this.isTyping == true) return "You are typing";
      else return "";
    },
  },
  methods:{
    changeIt(){
      this.num = 112;
    },
    async login(){
      let res = await this.$axios.$post("http://localhost:8080/login", {username: this.username, password: this.password})
      if(res.success){
        this.$cookies.set('_id', res.data._id, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$cookies.set('token', res.data.token, {
          path: '/',
          maxAge: 60 * 60 * 24 * 7
        })
        this.$store.dispatch('login', {token: res.data.token, _id: res.data._id})
        this.$router.push("/secret")
      }
    }
  }
}
</script>

<style lang="css" scoped>
</style>
