export class Post{
    title: string;
    thumbnailUrl: string;
    body: string;
    creationDate: Date;
    likes: number;
    dislikes: number;
    comments: string[];
  
    constructor(title: string, thumbnailUrl: string, body: string, creationDate: Date, likes: number, dislikes: number, comments: string[]) {
      this.title = title;
      this.thumbnailUrl = thumbnailUrl;
      this.body = body;
      this.creationDate = new Date();
      this.likes = likes;
      this.dislikes = dislikes;
      this.comments = comments;
    }
  }