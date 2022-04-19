import { burgersServices } from "../services/BurgersServices";
import BaseController from "../utils/BaseController";


export class BurgersController extends BaseController {
  constructor() {
    super('api/burgers')
    this.router
      .get('', this.getAllBurgers)
      .get('/:id', this.getBurgerId)
      .post('', this.postBurger)
      .put('/:id', this.editBurger)
      .delete('/:id', this.deleteBurger)
  }

  async getAllBurgers(req, res, next) {
    try {
      const allBurgers = await burgersServices.getAllBurgers()
      res.send(allBurgers)
    } catch (error) {
      next(error)
    }
  }
  async getBurgerId(req, res, next) {
    try {
      const burgerId = req.params.id
      const burger = await burgersServices.getBurgerId(burgerId)
      res.send(burger)
    } catch (error) {
      next(error)
    }
  }
  async postBurger(req, res, next) {
    try {
      const makeBurger = req.body
      const newBurger = await burgersServices.postBurger(makeBurger)
      res.send(newBurger)
    } catch (error) {
      next(error)
    }
  }
  async editBurger(req, res, next) {
    try {
      req.body.id = req.params.id
      const burgerEdit = await burgersServices.editBurger(req.body)
      res.send(burgerEdit)
    } catch (error) {
      next(error)
    }
  }
  async deleteBurger(req, res, next) {
    try {
      const deleteTarget = req.params.id
      const deleteBurger = await burgersServices.deleteBurger(deleteTarget)
      res.send(deleteBurger)
    } catch (error) {
      next(error)
    }
  }
}



