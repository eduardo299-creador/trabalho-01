import { perguntar } from "../utils.js";

export async function exercicio16() {
  const senha = await perguntar("Digite uma senha: ");

  const valida =
    senha.length >= 8 &&
    /[A-Z]/.test(senha) &&
    /[a-z]/.test(senha) &&
    /\d/.test(senha);

  if (valida) {
    console.log("Senha válida.");
  } else {
    console.log(
      "Senha inválida. Deve conter ao menos:\n- 8 caracteres\n- 1 letra maiúscula\n- 1 letra minúscula\n- 1 número"
    );
  }
}
