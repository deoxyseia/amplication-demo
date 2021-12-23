import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ComprobanteService } from "./comprobante.service";
import { ComprobanteControllerBase } from "./base/comprobante.controller.base";

@swagger.ApiTags("comprobantes")
@common.Controller("comprobantes")
export class ComprobanteController extends ComprobanteControllerBase {
  constructor(
    protected readonly service: ComprobanteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
