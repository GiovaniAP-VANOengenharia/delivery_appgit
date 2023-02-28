const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const inputEmail = /^([a-z\d-]+)@([a-z\d-]+)\.com$/;
  if (!email) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if (!inputEmail.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }

  if (password.length < 6) {
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
}

module.exports = {
  validateLogin,
}