import {Component, Input} from '@angular/core';
import {Post} from '../../models/post.model';
import {PostsService} from '../../services/posts.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent {

    @Input() post: Post;

    constructor(private postsSevice: PostsService) { }

    loveIt() {
        this.postsSevice.lovePost(this.post);
    }

    dontLoveIt() {
        this.postsSevice.dislovePost(this.post);
    }

    deletePost() {
        if (confirm('Etes-vous sûr de vouloir supprimer ce post ?')) {
            this.postsSevice.removePost(this.post);
        } else {
            return null;
        }
    }
}
