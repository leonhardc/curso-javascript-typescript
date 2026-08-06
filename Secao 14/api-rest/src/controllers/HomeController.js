import Aluno from "../models/Aluno";


class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: "Leonardo",
      sobrenome: "Silva",
      email: "leonardo.silva@example.com",
      idade: 30,
      peso: 75.5,
      altura: 1.8,
    });
    res.json({
      novoAluno,
    });
  }
}

export default new HomeController();
