import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ComprobanteServiceBase } from "./base/comprobante.service.base";

@Injectable()
export class ComprobanteService extends ComprobanteServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
