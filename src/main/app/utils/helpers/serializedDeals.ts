import { IPipedrive } from "@/domain/models/Pipedrivre";
import { CreateBusinessParams } from "@/domain/useCases/CreateBusiness";

function pipedriveToModel(deal: IPipedrive): CreateBusinessParams {
  const serealizedDeals: CreateBusinessParams = {
    add_time: deal.add_time,
    client_email: deal.person_id.email[0].value,
    client_name: deal.person_id.name,
    client_phone: deal.person_id.phone[0].value,
    code: deal.id,
    creator_email: deal.creator_user_id.email,
    creator_name: deal.creator_user_id.name,
    creator_user_id: String(deal.creator_user_id.id),
    currency: deal.currency,
    status: deal.status,
    title: deal.title,
    value: deal.value,
  };

  return serealizedDeals;
}

export { pipedriveToModel };
