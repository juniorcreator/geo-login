<template>
    <div class="signup container">
        <form class="card-panel" @submit.prevent="signup">
            <h2 class="center deep-purple-text">Signup</h2>
            <div class="field">
                <label for="email">Email</label>
                <input type="text" name="email" v-model="email">
            </div>
            <div class="field">
                <label for="password">Password</label>
                <input type="text" name="password" v-model="password">
            </div>
            <div class="field">
                <label for="alias">Alias</label>
                <input type="text" name="alias" v-model="alias">
                <p class="red-text center" v-if="feedback">{{feedback}}</p>
            </div>
            <div class="field center">
                <button class="btn deep-purple">Signup</button>
            </div>
        </form>
    </div>
</template>

<script>
    import db from '@/firebase/init'
    import slugify from 'slugify'
  export default {
    name: "Signup",
    data() {
      return {
        email: null,
        password: null,
        alias: null,
        feedback: null,
        slug: null,
      }
    },
    methods:{
      signup() {
        if(this.alias) {
          this.slug = slugify(this.alias, {
            replacement: '_',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true,
          });
          console.log(this.slug);
        }else {
          this.feedback = 'Please enter alias';
        }
      },
    }
  }
</script>

<style>
    .signup{
        max-width: 400px;
    }
</style>