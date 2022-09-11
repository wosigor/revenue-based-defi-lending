const express = require("express");

const borrowersControllers = require("../controllers/borrowers-controllers");

const router = express.Router();

router.post("/", borrowersControllers.createBorrower);

router.put("/:borrowerId", borrowersControllers.updateBorrower);

router.get("/:borrowerId", borrowersControllers.getBorrowerById);

router.get("/:borrowerId/stripe_reports", borrowersControllers.getStripeReport);

router.post(
  "/:borrowerId/loans",
  borrowersControllers.createBorrowerLoanRequest
);

router.get("/:borrowerId/loans", borrowersControllers.getBorrowerLoanRequests);

router.get(
  "/:borrowerId/loans/matches",
  borrowersControllers.getBorrowerLoanMatches
);

module.exports = router;
