import { IListAllBusiness } from "../../domain/useCases/ListAllBusiness";
import { IController } from "../protocols/controller";
import { HttpResponse, ok } from "../protocols/http";

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
