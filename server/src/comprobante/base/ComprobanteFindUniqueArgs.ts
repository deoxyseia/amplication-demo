import { ArgsType, Field } from "@nestjs/graphql";
import { ComprobanteWhereUniqueInput } from "./ComprobanteWhereUniqueInput";

@ArgsType()
class ComprobanteFindUniqueArgs {
  @Field(() => ComprobanteWhereUniqueInput, { nullable: false })
  where!: ComprobanteWhereUniqueInput;
}

export { ComprobanteFindUniqueArgs };
