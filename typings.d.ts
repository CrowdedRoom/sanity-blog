export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  comments: [Comment];
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Comment {
  _id: string;
  _updatedAt: string;
  _rev: string;
  _type: string;
  name: string;
  email: string;
  comment: string;
  approved: boolean;
  post: {
    _ref: string;
    _type: string;
  };
}
