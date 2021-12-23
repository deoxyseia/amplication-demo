import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ComprobanteWhereInput } from "./ComprobanteWhereInput";
import { Type } from "class-transformer";
import { ComprobanteOrderByInput } from "./ComprobanteOrderByInput";

@ArgsType()
class ComprobanteFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ComprobanteWhereInput,
  })
  @Field(() => ComprobanteWhereInput, { nullable: true })
  @Type(() => ComprobanteWhereInput)
  where?: ComprobanteWhereInput;

  @ApiProperty({
    required: false,
    type: ComprobanteOrderByInput,
  })
  @Field(() => ComprobanteOrderByInput, { nullable: true })
  @Type(() => ComprobanteOrderByInput)
  orderBy?: ComprobanteOrderByInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ComprobanteFindManyArgs };
