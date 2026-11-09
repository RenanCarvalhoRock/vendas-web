export async function login(usuario, senha) {
    await new Promise(resolve => setTimeout(resolve, 1000))

    if (usuario === 'admin' && senha === '123') {
        return { token: 'token-teste', usuario: { nome: 'Administrador' } }
    }
    throw new Error('Usuário ou senha inválidos.')
}