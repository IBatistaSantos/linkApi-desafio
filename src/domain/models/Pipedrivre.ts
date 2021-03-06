interface IEmail {
  label: string;
  value: string;
  primary: boolean;
}
interface IPhone {
  label: string;
  value: string;
  primary: boolean;
}
interface IPipedrive {
  id: number;
  creator_user_id: {
    id: number;
    name: string;
    email: string;
    active_flag: boolean;
    value: number;
  };
  title: string;
  add_time: Date;
  value: number;
  currency: string;
  status: string;

  person_id: {
    active_flag: boolean;
    name: string;
    email: IEmail[];
    phone: IPhone[];
    value: number;
  };
}

export { IPipedrive };
