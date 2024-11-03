import { z } from '@hono/zod-openapi';
// the inputs from the user to the routes
export const ParamsSchema = z.object({
    id: z.string().min(1).max(10).openapi({
        param: {
            name: "id",
            in: "path"
        },
        example: '1234'
    })
});
