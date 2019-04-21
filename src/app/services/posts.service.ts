import { Injectable } from '@angular/core';
import {Post} from '../models/post.model';
import {Subject} from 'rxjs/Subject';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class PostsService {

    posts: Post[] = [];
    postsSubject = new Subject<Post[]>();

    constructor() {
        this.getPosts();
    }

    emitPosts() {
        this.postsSubject.next(this.posts);
    }

    savePosts() {
        firebase.database().ref('/posts').set(this.posts);
        this.emitPosts();
    }

    getPosts() {
        firebase.database().ref('/posts')
            .on('value', (data: DataSnapshot) => {
                    this.posts = data.val() ? data.val() : [];
                    this.emitPosts();
                }
            );
    }

    lovePost(post: Post) {
        const postIndexToLove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );

        this.posts[postIndexToLove].loveIts++;
        this.savePosts();
    }

    dislovePost(post: Post) {
        const postIndexToDislove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );

        this.posts[postIndexToDislove].loveIts--;
        this.savePosts();
    }

    createNewPost(newPost: Post) {
        this.posts.push(newPost);
        this.savePosts();
    }

    removePost(post: Post) {
        const bookIndexToRemove = this.posts.findIndex(
            (postEl) => {
                if (postEl === post) {
                    return true;
                }
            }
        );
        this.posts.splice(bookIndexToRemove, 1);
        this.savePosts();
    }
}
