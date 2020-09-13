interface User {
  displayName: string;
  photoURL: string;
}

interface Post {
  id: string;
  data: {
    username: string;
    profilePic: string;
    message: string;
    timestamp: any;
  };
}

export type { User, Post };