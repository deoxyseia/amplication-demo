import { Module } from "@nestjs/common";
import { ComprobanteModuleBase } from "./base/comprobante.module.base";
import { ComprobanteService } from "./comprobante.service";
import { ComprobanteController } from "./comprobante.controller";
import { ComprobanteResolver } from "./comprobante.resolver";

@Module({
  imports: [ComprobanteModuleBase],
  controllers: [ComprobanteController],
  providers: [ComprobanteService, ComprobanteResolver],
  exports: [ComprobanteService],
})
export class ComprobanteModule {}
