import express from "express";
import userCtrl from "../controllers/user.controller.js";
import authCtrl from "../controllers/auth.controller.js";

const router = express.Router();

router
  .route("/api/users")
  .get(userCtrl.list)                               // get all users
  .post(userCtrl.create)                            // add new user (sign up)
  .delete(authCtrl.requireSignin, userCtrl.removeAll); // remove all users (protected)

router
  .route("/api/users/:userId")
  .get(authCtrl.requireSignin, userCtrl.read)                                // protected
  .put(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.update)   // protected + owner only
  .delete(authCtrl.requireSignin, authCtrl.hasAuthorization, userCtrl.remove);

router.param("userId", userCtrl.userByID);

export default router;
