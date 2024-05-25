
const { body, validationResult } = require('express-validator');

const validateCreateTodo = [
  body('text').notEmpty().withMessage('Text is required'),
  body('completed').notEmpty().isBoolean().withMessage('Completed is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

const validateUpdateTodo = [
  body('text').notEmpty().withMessage('Text is required'),
  body('completed').notEmpty().isBoolean().withMessage('Completed is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

module.exports = { validateCreateTodo, validateUpdateTodo };
