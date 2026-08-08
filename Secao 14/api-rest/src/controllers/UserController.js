import User from "../models/User";


class UserController {
  async create(req, res) {
    try {
      const novoUser = await User.create(req.body);
      return res.json({
        novoUser,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index

  async index(req, res) {
    try {
      const users = await User.findAll()
      return res.json(users);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Show

  async show(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["O usuario não existe"],
        })
      }
      return res.json(user);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Update

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["O usuario não existe"],
        })
      }
      const userUpdated = await user.update(req.body);
      return res.json(userUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);
      if (!user) {
        return res.status(400).json({
          errors: ["O usuario não existe"],
        });
      }
      await user.destroy();
      return res.json({ message: "Usuario deletado com sucesso" });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}



export default new UserController();
