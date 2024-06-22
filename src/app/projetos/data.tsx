enum Stacks {
    FIREBASE = "firebase",
    REACT = "react",
    NESTJS = "nestjs",
    PYTHON = "python",
    JAVASCRIPT = "javascript",
}

type Project = {
    name: string;
    description: string;
    stack: [Stacks, Stacks, Stacks],
    img: string;
    link: string | undefined;
}

const data: Project[] = [
    {
        name: "Reciclando com Amor",
        description: "Projeto fullstack organizado pelo grupo símios, realizado para a ONG Reciclando com Amor",
        stack: [Stacks.REACT, Stacks.FIREBASE, Stacks.NESTJS],
        img: "",
        link: undefined
    }
]

export default data