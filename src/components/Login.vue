<template>
  <v-layout>
    <v-flex xs12 sm8 offset-sm2 md4 offset-md4>
        <v-card raised>
        <v-toolbar color="teal lighten-3" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-toolbar>         
        <v-card-text>
            <v-form>
                <v-text-field
                label="Email"
                v-model="email"
                ></v-text-field>
                <v-text-field
                label="Password"
                v-model="password"
                type="password"
                ></v-text-field>
                <v-btn  @click="login(email,password)">
                    submit
                </v-btn>
            </v-form>
        </v-card-text>
        </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  name: 'Login',
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    login (email, password) {
      this.$store.commit('login', {email, password})
    }
  }
}
</script>
