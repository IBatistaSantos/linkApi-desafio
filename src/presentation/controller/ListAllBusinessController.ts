import { IListAllBusiness } from "../../domain/useCases/ListAllBusiness";
import { ok } from "../helpers/http";
import { IController } from "../protocols/controller";
import { HttpResponse } from "../protocols/Http";

class ListAllBusinessController implements IController {
  constructor(private readonly listAllBusiness: IListAllBusiness) {}

  async handle(): Promise<HttpResponse> {
    try {
      const allBusiness = await this.listAllBusiness.listAllBusiness();
      return ok(allBusiness);
    } catch (error) {
      throw new Error("");
    }
  }
}

export { ListAllBusinessController };
