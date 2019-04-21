import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Router} from '@angular/router';
import {Post} from '../models/post.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit, OnDestroy {

    posts: Post[];
    postsSubscription: Subscription;

    constructor(private postsService: PostsService, private router: Router) { }

    ngOnInit() {
      this.postsSubscription = this.postsService.postsSubject.subscribe(
          (posts: Post[]) => {
              this.posts = posts;
          }
      );
      this.postsService.emitPosts();
    }

    onNewPost() {
        this.router.navigate(['/new']);
    }

    ngOnDestroy() {
      this.postsSubscription.unsubscribe();
    }
}
