<script setup>
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link to="/categories" class="nav-link active">Categorias</router-link>
        <router-link to="/posts" class="nav-link active">Posts</router-link>
      </div>
      <h1>LogIn exitoso!</h1>
      <p>
        Cimenza creando categorias o utiliza las que existan para crear un post!!!
      </p>
    </div>
  </div>
</nav>
  <router-view></router-view>
</template>
