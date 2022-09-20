type StripeData = {
  revenue: number;
};

type BorrowLoanFormData = {
  name: string; // company name
  description: string; // company description
  email: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
  amount: nunber;
};

type LoanData = StripeData & BorrowLoanFormData;
