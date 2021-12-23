import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import * as gqlUserRoles from "../../auth/gqlUserRoles.decorator";
import * as abacUtil from "../../auth/abac.util";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateComprobanteArgs } from "./CreateComprobanteArgs";
import { UpdateComprobanteArgs } from "./UpdateComprobanteArgs";
import { DeleteComprobanteArgs } from "./DeleteComprobanteArgs";
import { ComprobanteFindManyArgs } from "./ComprobanteFindManyArgs";
import { ComprobanteFindUniqueArgs } from "./ComprobanteFindUniqueArgs";
import { Comprobante } from "./Comprobante";
import { ComprobanteService } from "../comprobante.service";

@graphql.Resolver(() => Comprobante)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ComprobanteResolverBase {
  constructor(
    protected readonly service: ComprobanteService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Comprobante",
    action: "read",
    possession: "any",
  })
  async _comprobantesMeta(
    @graphql.Args() args: ComprobanteFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Comprobante])
  @nestAccessControl.UseRoles({
    resource: "Comprobante",
    action: "read",
    possession: "any",
  })
  async comprobantes(
    @graphql.Args() args: ComprobanteFindManyArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Comprobante[]> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "any",
      resource: "Comprobante",
    });
    const results = await this.service.findMany(args);
    return results.map((result) => permission.filter(result));
  }

  @graphql.Query(() => Comprobante, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Comprobante",
    action: "read",
    possession: "own",
  })
  async comprobante(
    @graphql.Args() args: ComprobanteFindUniqueArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Comprobante | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "read",
      possession: "own",
      resource: "Comprobante",
    });
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return permission.filter(result);
  }

  @graphql.Mutation(() => Comprobante)
  @nestAccessControl.UseRoles({
    resource: "Comprobante",
    action: "create",
    possession: "any",
  })
  async createComprobante(
    @graphql.Args() args: CreateComprobanteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Comprobante> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "create",
      possession: "any",
      resource: "Comprobante",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Comprobante"} creation is forbidden for roles: ${roles}`
      );
    }
    // @ts-ignore
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Comprobante)
  @nestAccessControl.UseRoles({
    resource: "Comprobante",
    action: "update",
    possession: "any",
  })
  async updateComprobante(
    @graphql.Args() args: UpdateComprobanteArgs,
    @gqlUserRoles.UserRoles() userRoles: string[]
  ): Promise<Comprobante | null> {
    const permission = this.rolesBuilder.permission({
      role: userRoles,
      action: "update",
      possession: "any",
      resource: "Comprobante",
    });
    const invalidAttributes = abacUtil.getInvalidAttributes(
      permission,
      args.data
    );
    if (invalidAttributes.length) {
      const properties = invalidAttributes
        .map((attribute: string) => JSON.stringify(attribute))
        .join(", ");
      const roles = userRoles
        .map((role: string) => JSON.stringify(role))
        .join(",");
      throw new apollo.ApolloError(
        `providing the properties: ${properties} on ${"Comprobante"} update is forbidden for roles: ${roles}`
      );
    }
    try {
      // @ts-ignore
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Comprobante)
  @nestAccessControl.UseRoles({
    resource: "Comprobante",
    action: "delete",
    possession: "any",
  })
  async deleteComprobante(
    @graphql.Args() args: DeleteComprobanteArgs
  ): Promise<Comprobante | null> {
    try {
      // @ts-ignore
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
