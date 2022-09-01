import { ValidatedEventAPIGatewayProxyEvent } from "@libs/api-gateway";
import { middyfy } from "@libs/lambda";

import schema from "./schema";

const createUser: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {
  
}

export const main = middyfy(createUser);