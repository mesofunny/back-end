class Validations {
  static registerValidation(req, res, next) {
    const regexEmail = /S+@S+.S+/;
    const { firstname, lastname, email, password } = req.body;
    if (!firstname || !firstname.trim()) {
      return res.status(400).json({ message: 'firstname is required' });
    }
    if (!lastname || !lastname.trim()) {
      return res.status(400).json({ message: 'lastname is required' });
    }
    if (!email || !email.trim() || regexEmail.test(email.trim())) {
      return res.status(400).json({ message: 'Enter a valid email address' });
    }
    if (!password || password.length < 7) {
      return res
        .status(400)
        .json({ message: 'password length should be greater than 6' });
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
    if (!password || password.length < 7) {
      return res
        .status(400)
        .json({ message: 'Password length should be greater than 6' });
    }
    req.body.email = email.trim();
    req.body.password = password;
    return next();
  }

  static addJokeValidation(req, res, next) {
    const { title, joke, status } = req.body;
    if (!title || !title.trim()) {
      return res.status(400).json({ message: 'title is required' });
    }
    if (!joke || !joke.trim()) {
      return res.status(400).json({ message: 'joke is required' });
    }
    if (!status || !status.trim()) {
      return res.status(400).json({ message: 'status is required' });
    }
    if (
      status.toLowerCase().trim() !== 'yes' &&
      status.toLowerCase().trim() !== 'no'
    ) {
      console.log(status);
      return res.status(400).json({ message: 'status can only be yes or no' });
    }
    req.body.title = title.trim();
    req.body.joke = joke.trim();
    req.body.status = status.trim().toLowerCase();
    return next();
  }
}

module.exports = Validations;
