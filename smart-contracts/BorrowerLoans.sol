// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "./RevenueBasedLoan.sol";

contract BorrowerLoans {
    address[] public borrowers;
    mapping(address => RevenueBasedLoan) public loanRequestAddresses;
    mapping(address => uint256) public borrowerLoans;

    function createBorrowerLoan(
        uint256 loanAmount_,
        uint8 payoutRate_,
        uint256 loanFee_,
        string memory baseURI_
    ) public returns (bool) {
        require(
            borrowerLoans[msg.sender] == 0,
            "Borrower already published a request"
        );
        require(loanAmount_ > 0, "Borrower already published a request");
        RevenueBasedLoan loanRequest = new RevenueBasedLoan(
            "Revenue Based Loan",
            "RBL",
            loanAmount_,
            payoutRate_,
            loanFee_,
            msg.sender,
            7,
            baseURI_
        );
        borrowers.push(msg.sender);
        loanRequestAddresses[msg.sender] = loanRequest;
        borrowerLoans[msg.sender] = loanAmount_;
        return true;
    }

    function getAllBorrowers() external view returns (address[] memory) {
        return borrowers;
    }
}
