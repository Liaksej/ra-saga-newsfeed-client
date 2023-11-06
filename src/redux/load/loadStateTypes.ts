export interface LoadStateTypes {
  data: NewsBunch[];
  error: Error | null;
  loading: boolean;
  allContentLoaded: boolean;
  loadingMore: boolean;
}

export interface NewsBunch {
  id: number;
  from_id: number;
  owner_id: number;
  date: number;
  marked_as_ads: number;
  post_type: string;
  text: string;
  attachments: Attachment[];
  post_source: PostSource;
  comments: Comments;
  likes: Likes;
  reposts: Reposts;
  views: Views;
  is_favorite: boolean;
  edited?: number;
}

export interface Attachment {
  type: string;
  link?: Link;
  video?: Video;
  photo?: Photo2;
}

export interface Link {
  url: string;
  title: string;
  caption?: string;
  description: string;
  photo?: Photo;
  is_favorite?: boolean;
  target?: string;
  button?: Button;
}

export interface Photo {
  id: number;
  album_id: number;
  owner_id: number;
  sizes: Size[];
  text: string;
  date: number;
  user_id?: number;
}

export interface Size {
  type: string;
  url: string;
  width: number;
  height: number;
}

export interface Button {
  title: string;
  action: Action;
}

export interface Action {
  type: string;
  url: string;
}

export interface Video {
  id: number;
  owner_id: number;
  title: string;
  duration: number;
  description: string;
  date: number;
  comments: number;
  views: number;
  width: number;
  height: number;
  image: Image[];
  is_favorite: boolean;
  first_frame: FirstFrame[];
  access_key: string;
  can_add: number;
  track_code: string;
  type: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
  with_padding?: number;
}

export interface FirstFrame {
  url: string;
  width: number;
  height: number;
}

export interface Photo2 {
  id: number;
  album_id: number;
  owner_id: number;
  user_id: number;
  sizes: Size2[];
  text: string;
  date: number;
  access_key: string;
  post_id?: number;
}

export interface Size2 {
  type: string;
  url: string;
  width: number;
  height: number;
}

export interface PostSource {
  type: string;
}

export interface Comments {
  count: number;
  can_post: number;
  groups_can_post: boolean;
}

export interface Likes {
  count: number;
  user_likes: number;
  can_like: number;
  can_publish: number;
}

export interface Reposts {
  count: number;
  user_reposted: number;
}

export interface Views {
  count: number;
}
