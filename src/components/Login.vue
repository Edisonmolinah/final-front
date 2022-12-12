<template>
    <div class="login">
        <h1 class="title">Login in the page</h1>
        <form action class="form" @submit.prevent="login">
            <label class="form-label" for="#email">Email:</label>
            <input v-model="user.email" class="form-input" type="email" id="email" required placeholder="Email">
            <label class="form-label" for="#password">Password:</label>
            <input v-model="user.password" class="form-input" type="password" id="password" placeholder="Password">
            <input class="form-submit" type="submit" value="Login">
        </form>
    </div>
</template>
  
<script>

export default {
    data: () => ({
        user: {
            email: "",
            password: ""
        }
        
    }),
    methods: {
        async login() {

            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.user)
            }
            const token = await fetch("http://127.0.0.1:8000/api/login", options);
            const data = await token.json();
            localStorage.setItem('accessToken', data.token.accessToken)
            this.$router.replace({path: '/'});
        }
    }
};
</script>