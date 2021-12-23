import { Comprobante as TComprobante } from "../api/comprobante/Comprobante";

export const COMPROBANTE_TITLE_FIELD = "nroSerie";

export const ComprobanteTitle = (record: TComprobante): string => {
  return record.nroSerie || record.id;
};
