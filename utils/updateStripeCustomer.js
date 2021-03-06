const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = async function updateCustomer(bodyData) {
  const updatecustomerId = bodyData.data.customerId;
  let updatedCustomer = "";
  try {
    updatedCustomer = await stripe.customers.update(updatecustomerId, {
      name: bodyData.data.name,
      email: bodyData.data.email,
      metadata: {
        Logins: bodyData.data["Logins"],
        "Last Login": bodyData.data["Last Login"],
        "Last Session": bodyData.data["Last Session"],
        Trades: bodyData.data["Trades"],
        "Shared Trades": bodyData.data["Shared Trades"],
        Tier: bodyData.data["Tier"],
        "Storage Used": bodyData.data["Storage Used"],
      },
    });
  } catch {
    if (!updatedCustomer) {
      throw `${updatedCustomer} is invalid`;
    }
  }

  return updatedCustomer;
};
