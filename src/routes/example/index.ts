import { FastifyPluginAsync } from "fastify";
import got from "got";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", async function (request, reply) {
    const data = await got
      .get("https://dummy.restapiexample.com/api/v1/employee/1")
      .json();

    return data;
  });
};

export default example;
