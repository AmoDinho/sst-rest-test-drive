import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2
) => {
  const electicCars: Array<unknown> = [
    {
      brand: "Tesla",
      model: "Model Y",
    },
    {
      brand: "Ford",
      model: "Mustang",
    },
    {
      brand: "Mercedes",
      model: "EQS",
    },
  ];
  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: `Hello, World! Your request was received at ${event.requestContext.time}.`,
  };
};
