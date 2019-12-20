<template>
  <v-fab-transition>
    <v-btn fab dark fixed bottom right color="primary" v-show="fab" @click="toTop">
      <v-icon>mdi-chevron-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'app-fab',
  data () {
    return {
      fab: false
    }
  },
  created () {
    window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },

  methods: {
    onScroll (event) {
      if (typeof window === 'undefined') return

      const top = window.pageYOffset || document.documentElement.offsetTop || 0

      this.fab = top > 300
    },
    toTop () {
    //   this.$router.push({ hash: '' })
      this.$vuetify.goTo(0)
    }
  }
}
</script>
