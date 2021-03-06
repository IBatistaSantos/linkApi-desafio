import { CreateBusinessParams } from "../../../../domain/useCases/CreateBusiness";

const createXML = (business: CreateBusinessParams): string => {
  const xml = `
  <?xml version="1.0" encoding="ISO-8859-1"?>
  <root>
  <pedido>
     <cliente>
        <email>${business.client_email}</email>
        <fone>${business.client_phone}</fone>
        <nome>${business.client_name}</nome>
     </cliente>
     <codigo>${business.code}</codigo>
     <item>
        <codigo>${business.code}</codigo>
     </item>
     <volume>
        <servico>${business.title}</servico>
     </volume>
  </pedido>
</root>`;

  return xml;
};

export { createXML };
