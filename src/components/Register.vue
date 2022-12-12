<template>
    <div class="register">
        <h1 class="title">Sign Up</h1>
        <form action class="form" @submit.prevent="register">
            <label class="form-label" for="#name">Nombre:</label>
            <input v-model="user.name" class="form-input" type="name" id="name" required placeholder="Nombre">
            <label class="form-label" for="#name">Role_id (1 Admin, 2 Lector):</label>
            <input v-model="user.role_id" class="form-input" type="role_id" id="role_id" required placeholder="Role_id">
            <label class="form-label" for="#email">Email:</label>
            <input v-model="user.email" class="form-input" type="email" id="email" required placeholder="Email">
            <label class="form-label" for="#password">Password:</label>
            <input v-model="user.password" class="form-input" type="password" id="password" placeholder="Password">
            <label class="form-label" for="#password-repeat">Repite la contraeña:</label>
            <input v-model="user.password_confirmation" class="form-input" type="password" id="password-repeat"
                placeholder="Password">
            <input class="form-submit" type="submit" value="Sign Up">
        </form>
    </div>
</template>
  
<script>
export default {
    data: () => ({
        user: {
            name: "",
            email: "",
            role_id: "",
            password: "",
            password_confirmation: ""
        }

    }),
    methods: {
        async register() {
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(this.user)
            }
            const token = await fetch("http://127.0.0.1:8000/api/register", options);
            const data = await token.json();
            console.log(data)
            localStorage.setItem('accessToken', data.token);
            console.log(localStorage.getItem('accessToken'));
        }
    }
};
</script>
  
  