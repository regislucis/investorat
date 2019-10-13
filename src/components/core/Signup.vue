<template>
    <v-row class="mx-2">
        <p class="display-1">Sign Up User </p>
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
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            v-model="password"
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
          <v-btn color="primary" block>Sign Up</v-btn>
    </v-row>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: '',
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
      }
    }
  }
}
</script>
