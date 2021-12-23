import { PrismaService } from "nestjs-prisma";
import { Prisma, Comprobante } from "@prisma/client";

export class ComprobanteServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ComprobanteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComprobanteFindManyArgs>
  ): Promise<number> {
    return this.prisma.comprobante.count(args);
  }

  async findMany<T extends Prisma.ComprobanteFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComprobanteFindManyArgs>
  ): Promise<Comprobante[]> {
    return this.prisma.comprobante.findMany(args);
  }
  async findOne<T extends Prisma.ComprobanteFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComprobanteFindUniqueArgs>
  ): Promise<Comprobante | null> {
    return this.prisma.comprobante.findUnique(args);
  }
  async create<T extends Prisma.ComprobanteCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComprobanteCreateArgs>
  ): Promise<Comprobante> {
    return this.prisma.comprobante.create<T>(args);
  }
  async update<T extends Prisma.ComprobanteUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComprobanteUpdateArgs>
  ): Promise<Comprobante> {
    return this.prisma.comprobante.update<T>(args);
  }
  async delete<T extends Prisma.ComprobanteDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ComprobanteDeleteArgs>
  ): Promise<Comprobante> {
    return this.prisma.comprobante.delete(args);
  }
}
