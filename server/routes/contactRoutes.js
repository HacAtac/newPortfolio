import express from "express";
import contactMe from "../controllers/contact/newContact.js";
const router = express.Router();
/**
 * @description adminRoutes
 * @access      Public
 * @route       POST /contact
 *
 */

/**
 * @COMMENTS
 */
//
//

router.route("/").post(contactMe);

export default router;
