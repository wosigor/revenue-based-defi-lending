export type StripeReport = {
  currency: string;
  starting_balance: number;
  activity_gross: number;
  activity_fee: number;
  activity: number;
  payouts_gross: number;
  payouts: number;
  ending_balance: number;
  interval_start: number;
  interval_end: number;
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
