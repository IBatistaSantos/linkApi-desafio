import { ICreateBusiness } from "../../domain/useCases/CreateBusiness";
import { IController } from "../protocols/controller";
import { HttpResponse, created } from "../protocols/http";

export class CreateBusinessController implements IController {
  constructor(private readonly createBusinessUseCase: ICreateBusiness) {}

  async handle(): Promise<HttpResponse> {
    try {
      await this.createBusinessUseCase.create();
      return created({ message: "Integration done successfully" });
    } catch (error) {
      throw new Error("");
    }
  }
}
