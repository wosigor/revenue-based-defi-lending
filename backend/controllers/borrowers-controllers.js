const { v4: uuid } = require("uuid");

const HttpError = require("../models/http-error");

// Array of borrowers
let DUMMY_BORROWERS = [];

let DUMMY_STRIPE_REPORTS = [
  {
    currency: "eur",
    starting_balance: 0.0,
    activity_gross: 20.0,
    activity_fee: 0.83,
    activity: 19.17,
    payouts_gross: 0.0,
    payouts_fee: 0.0,
    payouts: 0.0,
    ending_balance: 19.17,
    interval_start: 1661806800,
    interval_end: 1661990400,
  },
];

// Creates a borrower and adds it to DUMMY_BORROWERS array
// Receives in the request the name and stripe key of the borrower
const createBorrower = (req, res, next) => {
  const { name, stripeKey } = req.body;

  const newBorrower = {
    id: uuid(),
    name,
    stripeKey,
    loanRequests: [],
    loanMatches: [],
  };

  DUMMY_BORROWERS.push(newBorrower);
  res.status(200).json(newBorrower);
};

// Updates a borrower in DUMMY_BORROWERS array
// Receives the borrowerId (in the url path), and new name and stripe key (in the body)
const updateBorrower = (req, res, next) => {
  const { name, stripeKey } = req.body;
  const borrowerId = req.params.borrowerId;

  const borrowerIndex = DUMMY_BORROWERS.findIndex((b) => b.id === borrowerId);

  if (borrowerIndex === -1) {
    throw new HttpError("Could not find a borrower for the provided id", 404);
  }

  const updatedBorrower = {
    ...DUMMY_BORROWERS[borrowerIndex],
  };

  updatedBorrower.name = name;
  updatedBorrower.stripeKey = stripeKey;

  DUMMY_BORROWERS[borrowerIndex] = updatedBorrower;

  res.status(200).json(updatedBorrower);
};

// Returns a borrower by its id
// Receives the borrowerId (in the url path) and returns the borrower object with that id
const getBorrowerById = (req, res, next) => {
  const borrowerId = req.params.borrowerId;

  const borrower = DUMMY_BORROWERS.find((b) => b.id === borrowerId);

  if (!borrower) {
    throw new HttpError("Could not find a borrower for the provided id", 404);
  }

  res.status(200).json(borrower);
};

// Returns Stripe report by borrower id
// Currently returns always the same report (for simplicity)
const getStripeReport = (req, res, next) => {
  const report = DUMMY_STRIPE_REPORTS[0];
  res.status(200).json(report);
};

// Creates a loan request and adds it to the borrower's loanRequests array
const createBorrowerLoanRequest = (req, res, next) => {
  const borrowerId = req.params.borrowerId;

  const borrower = DUMMY_BORROWERS.find((b) => b.id === borrowerId);

  if (!borrower) {
    throw new HttpError("Could not find a borrower for the provided id", 404);
  }

  const loanRequest = { id: uuid(), borrowerId, amount: req.body.amount };

  borrower.loanRequests.push(loanRequest);

  res.status(200).json(loanRequest);
};

// Returns borrower's loanRequests array
const getBorrowerLoanRequests = (req, res, next) => {
  const borrowerId = req.params.borrowerId;

  const borrower = DUMMY_BORROWERS.find((b) => b.id === borrowerId);

  if (!borrower) {
    throw new HttpError("Could not find a borrower for the provided id", 404);
  }

  res.status(200).json({ loanRequests: borrower.loanRequests });
};

// Returns borrower's loanMatches array
const getBorrowerLoanMatches = (req, res, next) => {
  const borrowerId = req.params.borrowerId;

  const borrower = DUMMY_BORROWERS.find((b) => b.id === borrowerId);

  if (!borrower) {
    throw new HttpError("Could not find a borrower for the provided id", 404);
  }

  res.status(200).json({ loanMatches: borrower.loanMatches });
};

exports.createBorrower = createBorrower;
exports.updateBorrower = updateBorrower;
exports.getBorrowerById = getBorrowerById;
exports.getStripeReport = getStripeReport;
exports.createBorrowerLoanRequest = createBorrowerLoanRequest;
exports.getBorrowerLoanRequests = getBorrowerLoanRequests;
exports.getBorrowerLoanMatches = getBorrowerLoanMatches;
