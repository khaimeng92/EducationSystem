import express from "express";
import adminController from "../src/controllers/admin";

let router = express.Router();

router.route("/register")
        .post(adminController.register);
router.route("/commonstudents")
        .get(adminController.commonstudents);
router.route("/suspend")
        .post(adminController.suspend);
router.route("/retrievefornotifications")
        .post(adminController.retrievefornotifications);

const adminRouter = router;
export default adminRouter;
