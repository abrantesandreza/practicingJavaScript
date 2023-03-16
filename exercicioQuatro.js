//Switch...Case

let permissao = " " //comum, gerente, diretor

switch (permissao) {
    case "comum":
        console.log("Usuário Comum");
        break
    
    case "gerente":
        console.log("Usuário Gerente");
        break
    
    case "diretor":
        console.log("Usuário Diretor");
        break

    default: 
        console.log("Usuário não encontrado.");
} 
