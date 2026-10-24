// Donation settings shared by the /donate page.
// When the Square integration is ready, set squareCheckoutEnabled to true and
// mount the Square Web Payments card form into the element with id SQUARE_CARD_CONTAINER_ID.
// Until then, the page hands the chosen amount off to the club's existing Square donation page.

export const donationConfig = {
  squareCheckoutEnabled: false,
  fallbackSquareUrl: "https://worwf.square.site/product/donate-to-suport-the-worwf-mission/33",
  presetAmounts: [25, 50, 100, 250, 500],
  defaultAmount: 100,
  minimumAmount: 5,
  maximumAmount: 10000,
};

export const SQUARE_CARD_CONTAINER_ID = "square-card-container";

export type DonationRequest = {
  amountCents: number;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dedication?: string;
};

/** Returns a validation message, or null when the amount is acceptable. */
export function validateDonationAmount(amount: number): string | null {
  if (!Number.isFinite(amount)) return "Please enter a donation amount.";
  if (amount < donationConfig.minimumAmount)
    return `The minimum donation is $${donationConfig.minimumAmount}.`;
  if (amount > donationConfig.maximumAmount)
    return `For gifts over $${donationConfig.maximumAmount.toLocaleString()}, please contact us directly.`;
  return null;
}
