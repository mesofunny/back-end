class Validations {
  static registerValidation(req, res, next) {
    const regexEmail = /S+@S+.S+/;
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !firstname.trim()) {
      return res.status(400).json({ message: 'Firstname is required' });
    }
    if (!lastname || !lastname.trim()) {
      return res.status(400).json({ message: 'Lastname is required' });
    }
    if (!email || !email.trim() || regexEmail.test(email.trim())) {
      return res.status(400).json({ message: 'Enter a valid email address' });
    }
    if (!password || password.length > 7) {
      return res
        .status(400)
        .json({ message: 'Password length should be greater than 6' });
    }
    req.body.firstname = firstname.trim();
    req.body.lastname = lastname.trim();
    req.body.email = email.trim();
    req.body.password = password;
    return next();
  }

  static loginValidation(req, res, next) {
    const regexEmail = /S+@S+.S+/;
    const { email, password } = req.body;
    if (!email || !email.trim() || regexEmail.test(email.trim())) {
      return res.status(400).json({ message: 'Enter a valid email address' });
    }
    if (!password || password.length > 7) {
      return res
        .status(400)
        .json({ message: 'Password length should be greater than 6' });
    }
    req.body.email = email.trim();
    req.body.password = password;
    return next();
  }
}

module.exports = Validations;
