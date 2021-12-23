import { ArgsType, Field } from "@nestjs/graphql";
import { ComprobanteWhereUniqueInput } from "./ComprobanteWhereUniqueInput";
import { ComprobanteUpdateInput } from "./ComprobanteUpdateInput";

@ArgsType()
class UpdateComprobanteArgs {
  @Field(() => ComprobanteWhereUniqueInput, { nullable: false })
  where!: ComprobanteWhereUniqueInput;
  @Field(() => ComprobanteUpdateInput, { nullable: false })
  data!: ComprobanteUpdateInput;
}

export { UpdateComprobanteArgs };
