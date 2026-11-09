<script setup>
import { ref } from 'vue'
import { login } from '@/services/auth'

const usuario = ref('')
const senha = ref('')
const erro = ref('')
const carregando = ref(false)

async function entrar() {
    erro.value = ''
    carregando.value = true

    try {
        const dados = await login(usuario.value, senha.value)
        console.log(dados)

    } catch (e) {
        erro.value = e.message
    } finally {
        carregando.value = false
    }

}

</script>

<template>
    <div class="login">
        <section class="login__brand">
            <div class="login__logo"></div>
            <h1>Sistema de Vendas</h1>
            <p>Cadastre Produtos e registre suas vendas</p>
        </section>
        <section>
            <form class="login__box" novalidate @submit.prevent="entrar">
                <h2>Entrar</h2>
                <label for="usuario" class="form-label">Usuário</label>
                <input id="usuario" v-model="usuario" type="text" class="form-control mb-3" />
                <label for="senha" class="form-label">Senha</label>
                <input id="senha" v-model="senha" type="password" class="form-control mb-4" />
                <button type="submit" class="btn btn-primary w-100" :disabled="carregando">
                    <span v-if="carregando" class="spinner-border spinner-border-sm me-2"></span>
                    {{ carregando ? 'Entrando...' : 'Entrar' }}
                </button>
                <div v-if="erro" class="alert alert-danger mt-3">{{ erro }}</div>
            </form>
        </section>
    </div>
</template>

<style scoped>
.login {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.login__form {
    display: flex;
    align-items: center;
    justify-content: center;
}

.login__box {
    width: 100%;
    max-width: 480px;
    padding: 2rem;
}

.login__brand {
    background: #0d6efd;
    color: #fff;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.login__logo {
    width: 96px;
    height: 96px;
    border-radius: 20px;
    background: #fff;
    color: #0d6efd;
    font-size: 3rem;
    font-weight: 700;
    display: grid;
    place-items: center;
    margin-bottom: 2rem;
}
</style>