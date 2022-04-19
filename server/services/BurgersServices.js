import { process_params } from "express/lib/router"
import { BurgerDb } from "../db/BurgerDB"


class BurgersServices{

  async getAllBurgers() {
    return BurgerDb.burgers
  }
 async postBurger(makeBurger) {
    BurgerDb.burgers.push(makeBurger)
    return BurgerDb.burgers
  }
  async getBurgerId(burgerId) {
    const burger = BurgerDb.burgers.find(b => b.id == burgerId)
    return burger
  }
 async editBurger(newBurger) {
    const original = await this.getBurgerId(newBurger.id)
    original.name = newBurger.name || original.name
    original.rating = newBurger.rating || original.name
    return original
  }
  async deleteBurger(deletedBurger) {
    const toDelete = await this.getBurgerId(deletedBurger)
    BurgerDb.burgers = BurgerDb.burgers.filter(b => b.id !== toDelete.id)
    return toDelete
  }
}




export const burgersServices = new BurgersServices()
