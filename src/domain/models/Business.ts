export type BusinessModel = {
  id: string;
  code: number;
  creator_user_id: string;
  creator_name: string;
  creator_email: string;
  client_name: string;
  client_email: string;
  client_phone: string;
  title: string;
  add_time: Date;
  value: number;
  currency: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
};
