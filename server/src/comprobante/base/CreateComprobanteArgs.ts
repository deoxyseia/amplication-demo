import { ArgsType, Field } from "@nestjs/graphql";
import { ComprobanteCreateInput } from "./ComprobanteCreateInput";

@ArgsType()
class CreateComprobanteArgs {
  @Field(() => ComprobanteCreateInput, { nullable: false })
  data!: ComprobanteCreateInput;
}

export { CreateComprobanteArgs };
