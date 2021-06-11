import { IListAllDailyEarnings } from "@/domain/useCases/ListAllDailyEarnings";

import { IController } from "../protocols/controller";
import { HttpResponse, ok, HttpRequest } from "../protocols/http";

export class ListAllDailyEarningsController implements IController {
  constructor(
    private readonly listAllDailyEarningsUseCase: IListAllDailyEarnings
  ) {}

  async handle(request: HttpRequest): Promise<HttpResponse> {
    const { page, limit } = request.query;
    try {
      const dailyEarnings = await this.listAllDailyEarningsUseCase.listAll({
        page,
        limit,
      });
      return ok(dailyEarnings);
    } catch (error) {
      throw new Error("");
    }
  }
}
