<template>
  <v-layout>
    <v-flex xs12 sm4 offset-sm4>
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
                ></v-text-field>
                <v-btn>
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
  })
}
</script>
