import { APIGatewayProxyEventV2, APIGatewayProxyHandlerV2 } from "aws-lambda";

export const handler: APIGatewayProxyHandlerV2 = async (
  event: APIGatewayProxyEventV2
) => {
  const data: object = JSON.parse(event.body);
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

  const selectedCar: Array<unknown> = electicCars.filter(
    (car) => car.brand === data.brand
  );

  return {
    statusCode: 200,
    headers: { "Content-Type": "text/plain" },
    body: selectedCar[0],
  };
};
