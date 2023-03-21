const router = require("express").Router();

const {
  getBurgers,
  addComent,
  getBurger,
  getComments,
} = require("../../controllers/comments");

const tryCatchWrapper = require("../../middlewares/tryCatchWrapper");

router.get("/", tryCatchWrapper(getBurgers));
router.get("/:id", tryCatchWrapper(getBurger));
router.get("/comments/:id", tryCatchWrapper(getComments));
router.patch("/comments/:id", tryCatchWrapper(addComent));

module.exports = router;
