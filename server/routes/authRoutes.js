import express from "express";
import register from "../controllers/auth/register.js";
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

router.route("/").post(register);

export default router;
