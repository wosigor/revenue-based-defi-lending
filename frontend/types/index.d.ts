export type StripeData = {
  revenue: number;
};

export type BorrowLoanFormData = {
  name: string; // company name
  description: string; // company description
  email: string;
  twitter?: string;
  linkedIn?: string;
  website?: string;
  amount: nunber;
  stripeKey: string;
  revenue: string;
};

type LoanData = StripeData & BorrowLoanFormData;
