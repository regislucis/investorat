<template>
    <v-row>
      <v-col cols="12" md="8" id="backgroundAbout">
        <v-row align="center" justify="center" class="pa-5">
          <v-col cols="12" >
          <v-img
          src="https://investoratpublic.s3.amazonaws.com/default/SVG+-+LOGO+(8).svg">
          </v-img>
          </v-col>
          <v-card color="#8d5536" flat dark >
            <v-card-title>Apa itu Investorat ?</v-card-title>
            <v-card-text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</v-card-text>
          </v-card>
          <v-row class="d-flex d-md-none">
          <v-col cols="12" sm="6" >
          <v-dialog v-model="dialog" persistent >
      <template v-slot:activator="{ on }">
        <v-btn color="primary lighten-2" block dark v-on="on">Login</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Login Here</v-card-title>
        <v-card-text>insert username, and password below</v-card-text>
        <v-card-actions>
          <!-- this is dialog for login -->
          <v-row class="mx-2">
        <v-col cols="12">
        <v-text-field
            class="mt-2"
            :rules="[rules.required, rules.min]"
            label="Email"
            v-model="email"
            name="email"
            append-icon="mdi-email"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
            :rules="[rules.required, rules.min]"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="password"
            name="password"
            autocomplete="off"
            label="Password"
            id="password"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="mx-2">
          <v-btn color="primary" :to="{ name: 'dashboardNazir'}" block>Login</v-btn>
        </v-col>
        <v-col cols="12" class="mx-2">
          <v-btn @click="dialog = false" outlined block>exit</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
      </v-card>
    </v-dialog>
          </v-col>
          <v-col cols="12" sm="6">
<v-dialog v-model="dialog2" persistent >
      <template v-slot:activator="{ on }">
        <v-btn  block  v-on="on">Sign Up</v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">Sign Up Here</v-card-title>
        <v-card-text>Register your email</v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <!-- this is dialog for signup -->
          <v-row class="mx-2">
        <v-col cols="12">
        <v-text-field
            class="mt-2"
            :rules="[rules.required, rules.min]"
            label="Email"
            v-model="emailSignup"
            name="email"
            append-icon="mdi-email"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
            :rules="[rules.required, rules.min]"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="signUpPassword"
            name="password"
            autocomplete="off"
            label="Password"
            id="password"
            :type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12">
            <v-text-field
            :rules="[rules.required, rules.min]"
            :append-icon="showConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="confirmPassword"
            name="password confirmation"
            autocomplete="off"
            label="Confirmation Password"
            id="confirmation_password"
            :type="showConfirmation ? 'text' : 'password'"
            @click:append="showConfirmation = !showConfirmation"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" class="mx-2">
          <v-btn color="primary" block>Sign Up</v-btn>
        </v-col>
        <v-col cols="12" class="mx-2">
          <v-btn @click="dialog2 = false" outlined block>exit</v-btn>
        </v-col>
    </v-row>
        </v-card-actions>
      </v-card>
    </v-dialog>
    </v-col>
          </v-row>
        </v-row>
      </v-col>
      <v-col class="d-none d-md-flex " cols="12" md="4" id="backgroundLogin">
        <v-row align="start" class="px-2" justify="center">
        <v-col cols="6">
          <v-btn @click="selectedComponent = 'signup'" primary block>Sign Up</v-btn>
        </v-col>
        <v-col cols="6">
          <v-btn @click="selectedComponent = 'login'" primary block>Login</v-btn>
        </v-col>
          <component :is="selectedComponent"></component>
          <router-view />
        </v-row>
      </v-col>
    </v-row>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
      show: false,
      emailSignup: '',
      signUpPassword: '',
      confirmPassword: '',
      showPassword: false,
      showConfirmation: false,
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 8 || 'Min 8 characters'
        // emailMatch: () => ('The email and password you entered don\'t match'),
      },
      selectedComponent: 'login',
      dialog: false,
      dialog2: false
    }
  },
  components: {
    login: () => import('../components/core/Login'),
    signup: () => import('../components/core/Signup')
  }
}
</script>

<style scoped>
#backgroundLogin {
  background-color: blanchedalmond
}
#backgroundAbout {
  background-color: #8d5536
}
</style>
