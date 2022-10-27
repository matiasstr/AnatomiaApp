require("dotenv").config();
const { Planes } = require("../DB/db");
const request = require("request");
const CLIENT =
  "AQQ6HIO71HvXznp7nZpLFfeVfmzyJfc3PRwvA36mCLV8lWq9Vv34gs-1OE4r6SEUBSSZPw_nl4FuMVnt";
const SECRET =
  "EL3kdkr61kGl7sztXRAmgptScwDAT-TRnWnPB8hjM34gj6PLeiYPaO5J8kAXmxS9ofs2Oo6TAezYvTzk";
const PAYPAL_API = "https://api-m.sandbox.paypal.com"; // Live https://api-m.paypal.com
const auth = { user: CLIENT, pass: SECRET };

const createPayment = (req, res) => {
  console.log("entroasd");
  const body = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD", //https://developer.paypal.com/docs/api/reference/currency-codes/
          value: "3",
        },
      },
    ],
    application_context: {
      brand_name: `anatomiaApp`,
      landing_page: "NO_PREFERENCE", // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
      user_action: "PAY_NOW", // Accion para que en paypal muestre el monto del pago
      return_url: `http://localhost:3001/paypal/execute`, // Url despues de realizar el pago
      cancel_url: `http://localhost:3000/cancel-payment`, // Url despues de realizar el pago
    },
  };
  //https://api-m.sandbox.paypal.com/v2/checkout/orders [POST]
  request.post(
    `${PAYPAL_API}/v2/checkout/orders`,
    {
      auth,
      body,
      json: true,
    },
    (err, response) => {
      res.json({ data: response.body });
    }
  );
};

const executePayment = (req, res) => {
  const token = req.query.token; //<-----------

  request.post(
    `${PAYPAL_API}/v2/checkout/orders/${token}/capture`,
    {
      auth,
      body: {},
      json: true,
    },
    (err, response) => {
      res.json({ data: response.body });
    }
  );
};

const createProduct = (req, res) => {
  let body = req.body;

  // console.log(body)

  const product = {
    name: body.name,
    description: body.description,
    type: "SERVICE",
    category: "SOFTWARE",
    image_url: body.image_url,
  };

  //https://developer.paypal.com/docs/api/catalog-products/v1/#products_create
  request.post(
    `${PAYPAL_API}/v1/catalogs/products`,
    {
      auth,
      body: product,
      json: true,
    },
    (err, response) => {
      res.status(200).json({ data: response.body });
    }
  );
};

const createPlan = (req, res) => {
  const { body } = req;
  const plan = {
    name: "PLAN mensual",
    product_id: body.product_id,
    status: "ACTIVE",
    billing_cycles: [
      {
        frequency: {
          interval_unit: body.interval_unit,
          interval_count: 1,
        },
        tenure_type: "REGULAR",
        sequence: 1,
        total_cycles: parseInt(body.total_cycles),
        pricing_scheme: {
          fixed_price: {
            value: body.value, // PRECIO MENSUAL QUE COBRAS 3.30USD
            currency_code: "USD",
          },
        },
      },
    ],
    payment_preferences: {
      auto_bill_outstanding: true,
      setup_fee: {
        value: "0",
        currency_code: "USD",
      },
      setup_fee_failure_action: "CONTINUE",
      payment_failure_threshold: 3,
    },
    taxes: {
      percentage: body.percentage, // 10USD + 10% = 11 USD
      inclusive: false,
    },
  };

  request.post(
    `${PAYPAL_API}/v1/billing/plans`,
    {
      auth,
      body: plan,
      json: true,
    },
    async (err, response) => {
      body.plan_id = response.body.id;

      let planCreado = await Planes.create({
        name: body.name,
        description: body.description,
        image_url: body.image_url,
        interval_unit: body.interval_unit,
        total_cycles: body.total_cycles,
        value: body.value,
        percentage: body.percentage,
        product_id: body.product_id,
        plan_id: body.plan_id,
      });

      res.json({ data: planCreado });
    }
  );
};

const generateSubscription = async(req, res) => {
  // const { body } = req;
  // console.log(body)

  //  let plan = await Planes.findOne({
  //   where: {
  //       id: body.id
  //   }
  //  })
  //  console.log(plan.dataValues.plan_id)

  const subscription = {
    plan_id: 'P-3LA970144C083021SMNNNHZI', //P-3HK92642FR4448515MBQHCYQ
    start_time: "2022-11-26T20:04:00Z",
    quantity: 1,
    subscriber: {
      name: {
        given_name: "Leifer",
        surname: "Mendez",
      },
      email_address: "customer@example.com",
    },
    return_url: "https://www.youtube.com/",
    cancel_url: "http://localhost/fallo",
  };
  request.post(
    `${PAYPAL_API}/v1/billing/subscriptions`,
    {
      auth,
      body: subscription,
      json: true,
    },
    (err, response) => {
      res.json({ data: response.body });
    }
  );
};

module.exports = {
  createPayment,
  executePayment,
  createProduct,
  createPlan,
  generateSubscription,
};
