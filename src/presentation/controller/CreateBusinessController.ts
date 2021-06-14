import { ICreateBusiness } from "../../domain/useCases/CreateBusiness";
import { IntegrationFailed } from "../errors/IntegrationFailed";
import { badRequest, created } from "../helpers/http";
import { IController } from "../protocols/controller";
import { HttpResponse } from "../protocols/Http";

export class CreateBusinessController implements IController {
  constructor(private readonly createBusinessUseCase: ICreateBusiness) {}

  async handle(): Promise<HttpResponse> {
    try {
      await this.createBusinessUseCase.create();
      return created({ message: "Integration done successfully" });
    } catch (error) {
      return badRequest(new IntegrationFailed());
    }
  }
}
