import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ComprobanteResolverBase } from "./base/comprobante.resolver.base";
import { Comprobante } from "./base/Comprobante";
import { ComprobanteService } from "./comprobante.service";

@graphql.Resolver(() => Comprobante)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ComprobanteResolver extends ComprobanteResolverBase {
  constructor(
    protected readonly service: ComprobanteService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
