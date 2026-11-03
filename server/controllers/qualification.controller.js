import Qualification from "../models/qualification.model.js";
import extend from "lodash/extend.js";
import errorHandler from "../helpers/dbErrorHandler.js";

// POST api/qualifications - add new qualification
const create = async (req, res) => {
  const qualification = new Qualification(req.body);
  try {
    await qualification.save();
    return res.status(200).json(qualification);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// GET api/qualifications - get all qualifications
const list = async (req, res) => {
  try {
    const qualifications = await Qualification.find();
    res.json(qualifications);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// router.param handler - loads the qualification for any route with :qualificationId
const qualificationByID = async (req, res, next, id) => {
  try {
    const qualification = await Qualification.findById(id);
    if (!qualification) return res.status(404).json({ error: "Qualification not found" });
    req.qualification = qualification;
    next();
  } catch (err) {
    return res.status(400).json({ error: "Could not retrieve qualification" });
  }
};

// GET api/qualifications/:id - get qualification by id
const read = (req, res) => res.json(req.qualification);

// PUT api/qualifications/:id - update qualification by id
const update = async (req, res) => {
  try {
    let qualification = req.qualification;
    qualification = extend(qualification, req.body);
    await qualification.save();
    res.json(qualification);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// DELETE api/qualifications/:id - remove qualification by id
const remove = async (req, res) => {
  try {
    const deleted = await req.qualification.deleteOne();
    res.json(deleted);
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

// DELETE api/qualifications - remove all qualifications
const removeAll = async (req, res) => {
  try {
    const result = await Qualification.deleteMany({});
    res.json({ message: `${result.deletedCount} qualification(s) were deleted successfully!` });
  } catch (err) {
    return res.status(400).json({ error: errorHandler.getErrorMessage(err) });
  }
};

export default { create, list, qualificationByID, read, update, remove, removeAll };
