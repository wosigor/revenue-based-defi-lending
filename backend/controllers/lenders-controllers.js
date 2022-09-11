const { v4: uuid } = require("uuid");

const HttpError = require("../models/http-error");

// Array of lenders
let DUMMY_LENDERS = [];

// Creates a lender and adds it to DUMMY_LENDERS array
// Receives in the request the name of the lender
const createLender = (req, res, next) => {
  const { name } = req.body;

  const newLender = {
    id: uuid(),
    name,
    loanRequests: [],
    loanMatches: [],
  };

  DUMMY_LENDERS.push(newLender);
  res.status(200).json(newLender);
};

// Returns a lender by its id
// Receives the lenderId (in the url path) and returns the lender object with that id
const getLenderById = (req, res, next) => {
  const lenderId = req.params.lenderId;

  const lender = DUMMY_LENDERS.find((b) => b.id === lenderId);

  if (!lender) {
    throw new HttpError("Could not find a lender for the provided id", 404);
  }

  res.status(200).json(lender);
};

// Creates a loan request and adds it to the lender's loanRequests array
const createLenderLoanRequest = (req, res, next) => {
  const lenderId = req.params.lenderId;

  const lender = DUMMY_LENDERS.find((b) => b.id === lenderId);

  if (!lender) {
    throw new HttpError("Could not find a lender for the provided id", 404);
  }

  const loanRequest = { id: uuid(), lenderId, amount: req.body.amount };

  lender.loanRequests.push(loanRequest);

  res.status(200).json(loanRequest);
};

// Returns lender's loanRequests array
const getLenderLoanRequests = (req, res, next) => {
  const lenderId = req.params.lenderId;

  const lender = DUMMY_LENDERS.find((b) => b.id === lenderId);

  if (!lender) {
    throw new HttpError("Could not find a lender for the provided id", 404);
  }

  res.status(200).json({ loanRequests: lender.loanRequests });
};

exports.createLender = createLender;
exports.getLenderById = getLenderById;
exports.createLenderLoanRequest = createLenderLoanRequest;
exports.getLenderLoanRequests = getLenderLoanRequests;
