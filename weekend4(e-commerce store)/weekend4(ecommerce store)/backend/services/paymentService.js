async function processPayment({ amount, method = "mock" }) {
  const mode = process.env.PAYMENT_MODE || "mock_success";

  if (mode === "mock_failure") {
    return { success: false, transactionId: null, message: "Mock payment failed" };
  }

 
  return {
    success: true,
    transactionId: `MOCK-${Date.now()}`,
    method,
    amount
  };
}

module.exports = { processPayment };
