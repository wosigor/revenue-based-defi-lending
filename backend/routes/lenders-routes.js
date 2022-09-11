const express = require("express");

const lendersControllers = require("../controllers/lenders-controllers");

const router = express.Router();

router.post("/", lendersControllers.createLender);

router.get("/:lenderId", lendersControllers.getLenderById);

router.post("/:lenderId/loans", lendersControllers.createLenderLoanRequest);

router.get("/:lenderId/loans", lendersControllers.getLenderLoanRequests);

module.exports = router;
