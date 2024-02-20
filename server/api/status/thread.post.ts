import { readFiles } from "h3-formidable";
import { threadTransformer } from "~/server/transformers/thread";
import { createMedia } from "~/server/turso/queries/media";
import { createThread } from "~/server/turso/queries/threads";
import { uploadToCloudinary } from "~/server/utils/cloudinary";

export default defineEventHandler(async (event) => {
  const { fields, files } = await readFiles(event);
  const user = JSON.parse(event.headers.get("user") || "{}");

  let threadData = {
    thread: String(fields.thread),
    userId: user.id,
    replyToId: Number(fields.replyToId) || null,
  };

  const thread = await createThread(threadData);

  if (!thread)
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Error creating user" })
    );

  if (!!files) {
    const filePromises = Object.keys(files).map(async (key) => {
      const file = files[key];

      //@ts-ignore
      const cloudinaryResource = await uploadToCloudinary(file.filepath);
      return createMedia({
        //@ts-ignore
        url: cloudinaryResource.secure_url,
        //@ts-ignore
        publicId: cloudinaryResource.public_id,
        userId: user.id,
        threadId: thread.id,
      });
    });

    await Promise.all(filePromises);
  }

  return {
    thread: thread,
  };
});
