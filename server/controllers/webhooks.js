import { Webhook } from "svix";
import User from "../models/User.js";

export const clerkWebhooks = async (req, res) => {
  try {
    // create instance
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    const requestBody = JSON.stringify(req.body);
    let event;
    event = await whook.verify(requestBody, req.headers["svix-signature"]);

    //gt ata nd tyep froom webhook
    const { data, type } = req.body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_adresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
          resume: "",
        };

        await User.create(userData);
        res.json({});
        break;
      }
      case "user.updated": {
        const userData = {
          email: data.email_adresses[0].email_address,
          name: data.first_name + " " + data.last_name,
          image: data.image_url,
        };

        await User.findByIdAndUpdate(data._id, userData);
        res.json({});
        break;
      }
      case "user.deleted": {
        // const userData = {
        //   email: data.email_adresses[0].email_address,
        //   name: data.first_name + " " + data.last_name,
        //   image: data.image_url,
        // };

        await User.findByIdAndDeletes(data._id);
        res.json({});
        break;
      }
      default: {
        break;
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: "Failed in some user operation" });
  }
};
