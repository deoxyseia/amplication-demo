import { ArgsType, Field } from "@nestjs/graphql";
import { ComprobanteWhereUniqueInput } from "./ComprobanteWhereUniqueInput";

@ArgsType()
class DeleteComprobanteArgs {
  @Field(() => ComprobanteWhereUniqueInput, { nullable: false })
  where!: ComprobanteWhereUniqueInput;
}

export { DeleteComprobanteArgs };
