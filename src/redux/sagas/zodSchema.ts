import { z } from "zod";

export const newsBunchSchema = z.array(
  z.union([
    z.object({
      id: z.number(),
      from_id: z.number(),
      owner_id: z.number(),
      date: z.number(),
      marked_as_ads: z.number(),
      post_type: z.string(),
      text: z.string(),
      attachments: z.array(
        z.union([
          z.object({
            type: z.string(),
            video: z.object({
              id: z.number(),
              owner_id: z.number(),
              title: z.string(),
              duration: z.number(),
              description: z.string(),
              date: z.number(),
              comments: z.number(),
              views: z.number(),
              width: z.number(),
              height: z.number(),
              image: z.array(
                z.union([
                  z.object({
                    height: z.number(),
                    url: z.string(),
                    width: z.number(),
                    with_padding: z.number(),
                  }),
                  z.object({
                    height: z.number(),
                    url: z.string(),
                    width: z.number(),
                  }),
                ]),
              ),
              is_favorite: z.boolean(),
              first_frame: z.array(
                z.object({
                  url: z.string(),
                  width: z.number(),
                  height: z.number(),
                }),
              ),
              access_key: z.string(),
              can_add: z.number(),
              track_code: z.string(),
              type: z.string(),
            }),
          }),
          z.object({
            type: z.string(),
            link: z.object({
              url: z.string(),
              title: z.string(),
              description: z.string(),
              target: z.string(),
              is_favorite: z.boolean(),
            }),
          }),
        ]),
      ),
      post_source: z.object({ type: z.string() }),
      comments: z.object({
        count: z.number(),
        can_post: z.number(),
        groups_can_post: z.boolean(),
      }),
      likes: z.object({
        count: z.number(),
        user_likes: z.number(),
        can_like: z.number(),
        can_publish: z.number(),
      }),
      reposts: z.object({ count: z.number(), user_reposted: z.number() }),
      views: z.object({ count: z.number() }),
      is_favorite: z.boolean(),
    }),
    z.object({
      id: z.number(),
      from_id: z.number(),
      owner_id: z.number(),
      date: z.number(),
      marked_as_ads: z.number(),
      post_type: z.string(),
      text: z.string(),
      attachments: z.array(
        z.object({
          type: z.string(),
          link: z.object({
            url: z.string(),
            title: z.string(),
            caption: z.string(),
            description: z.string(),
            photo: z.object({
              id: z.number(),
              album_id: z.number(),
              owner_id: z.number(),
              sizes: z.array(
                z.object({
                  type: z.string(),
                  url: z.string(),
                  width: z.number(),
                  height: z.number(),
                }),
              ),
              text: z.string(),
              date: z.number(),
            }),
            is_favorite: z.boolean(),
          }),
        }),
      ),
      post_source: z.object({ type: z.string() }),
      comments: z.object({
        count: z.number(),
        can_post: z.number(),
        groups_can_post: z.boolean(),
      }),
      likes: z.object({
        count: z.number(),
        user_likes: z.number(),
        can_like: z.number(),
        can_publish: z.number(),
      }),
      reposts: z.object({ count: z.number(), user_reposted: z.number() }),
      views: z.object({ count: z.number() }),
      is_favorite: z.boolean(),
    }),
    z.object({
      id: z.number(),
      from_id: z.number(),
      owner_id: z.number(),
      date: z.number(),
      marked_as_ads: z.number(),
      post_type: z.string(),
      text: z.string(),
      attachments: z.array(
        z.object({
          type: z.string(),
          link: z.object({
            url: z.string(),
            title: z.string(),
            caption: z.string(),
            description: z.string(),
            photo: z.object({
              id: z.number(),
              album_id: z.number(),
              owner_id: z.number(),
              user_id: z.number(),
              sizes: z.array(
                z.object({
                  type: z.string(),
                  url: z.string(),
                  width: z.number(),
                  height: z.number(),
                }),
              ),
              text: z.string(),
              date: z.number(),
            }),
            button: z.object({
              title: z.string(),
              action: z.object({ type: z.string(), url: z.string() }),
            }),
          }),
        }),
      ),
      post_source: z.object({ type: z.string() }),
      comments: z.object({
        count: z.number(),
        can_post: z.number(),
        groups_can_post: z.boolean(),
      }),
      likes: z.object({
        count: z.number(),
        user_likes: z.number(),
        can_like: z.number(),
        can_publish: z.number(),
      }),
      reposts: z.object({ count: z.number(), user_reposted: z.number() }),
      views: z.object({ count: z.number() }),
      is_favorite: z.boolean(),
    }),
    z.object({
      id: z.number(),
      from_id: z.number(),
      owner_id: z.number(),
      date: z.number(),
      marked_as_ads: z.number(),
      post_type: z.string(),
      text: z.string(),
      attachments: z.array(
        z.object({
          type: z.string(),
          link: z.object({
            url: z.string(),
            title: z.string(),
            caption: z.string(),
            description: z.string(),
            photo: z.object({
              id: z.number(),
              album_id: z.number(),
              owner_id: z.number(),
              sizes: z.array(
                z.object({
                  type: z.string(),
                  url: z.string(),
                  width: z.number(),
                  height: z.number(),
                }),
              ),
              text: z.string(),
              date: z.number(),
            }),
            is_favorite: z.boolean(),
          }),
        }),
      ),
      post_source: z.object({ type: z.string() }),
      comments: z.object({
        count: z.number(),
        can_post: z.number(),
        groups_can_post: z.boolean(),
      }),
      likes: z.object({
        count: z.number(),
        user_likes: z.number(),
        can_like: z.number(),
        can_publish: z.number(),
      }),
      reposts: z.object({ count: z.number(), user_reposted: z.number() }),
      views: z.object({ count: z.number() }),
      is_favorite: z.boolean(),
      edited: z.number(),
    }),
    z.object({
      id: z.number(),
      from_id: z.number(),
      owner_id: z.number(),
      date: z.number(),
      marked_as_ads: z.number(),
      post_type: z.string(),
      text: z.string(),
      attachments: z.array(
        z.object({
          type: z.string(),
          photo: z.object({
            id: z.number(),
            album_id: z.number(),
            owner_id: z.number(),
            user_id: z.number(),
            sizes: z.array(
              z.object({
                type: z.string(),
                url: z.string(),
                width: z.number(),
                height: z.number(),
              }),
            ),
            text: z.string(),
            date: z.number(),
            post_id: z.number(),
            access_key: z.string(),
          }),
        }),
      ),
      post_source: z.object({ type: z.string() }),
      comments: z.object({
        count: z.number(),
        can_post: z.number(),
        groups_can_post: z.boolean(),
      }),
      likes: z.object({
        count: z.number(),
        user_likes: z.number(),
        can_like: z.number(),
        can_publish: z.number(),
      }),
      reposts: z.object({ count: z.number(), user_reposted: z.number() }),
      views: z.object({ count: z.number() }),
      is_favorite: z.boolean(),
    }),
    z.object({
      id: z.number(),
      from_id: z.number(),
      owner_id: z.number(),
      date: z.number(),
      marked_as_ads: z.number(),
      post_type: z.string(),
      text: z.string(),
      attachments: z.array(
        z.union([
          z.object({
            type: z.string(),
            photo: z.object({
              id: z.number(),
              album_id: z.number(),
              owner_id: z.number(),
              user_id: z.number(),
              sizes: z.array(
                z.object({
                  type: z.string(),
                  url: z.string(),
                  width: z.number(),
                  height: z.number(),
                }),
              ),
              text: z.string(),
              date: z.number(),
              access_key: z.string(),
            }),
          }),
          z.object({
            type: z.string(),
            link: z.object({
              url: z.string(),
              title: z.string(),
              description: z.string(),
              target: z.string(),
              is_favorite: z.boolean(),
            }),
          }),
        ]),
      ),
      post_source: z.object({ type: z.string() }),
      comments: z.object({
        count: z.number(),
        can_post: z.number(),
        groups_can_post: z.boolean(),
      }),
      likes: z.object({
        count: z.number(),
        user_likes: z.number(),
        can_like: z.number(),
        can_publish: z.number(),
      }),
      reposts: z.object({ count: z.number(), user_reposted: z.number() }),
      views: z.object({ count: z.number() }),
      is_favorite: z.boolean(),
      edited: z.number(),
    }),
  ]),
);
