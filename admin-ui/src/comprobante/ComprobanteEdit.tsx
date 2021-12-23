import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ComprobanteEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Nro Serie" source="nroSerie" />
      </SimpleForm>
    </Edit>
  );
};
