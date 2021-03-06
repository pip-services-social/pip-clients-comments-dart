import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { Descriptor } from 'pip-services3-commons-node';
import { DirectClient } from 'pip-services3-rpc-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { ICommentsClientV1 } from './ICommentsClientV1';
import { CommentV1 } from './CommentV1';

export class CommentsDirectClientV1 extends DirectClient<any> implements ICommentsClientV1 {

    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("pip-services-comments", "controller", "*", "*", "*"));

        let thisConfig = ConfigParams.fromValue(config);
        if (config != null) this.configure(thisConfig);
    }
    
    public getComments(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CommentV1>) => void): void {
        let timing = this.instrument(correlationId, 'comments.get_comments');
        this._controller.getComments(correlationId, filter, paging, (err, page) => {
            timing.endTiming();
            callback(err, page);
        });
    }

    public getCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.get_comment_by_id');
        this._controller.getCommentById(correlationId, commentId, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }

    public createComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.create_comment');
        this._controller.createComment(correlationId, comment, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }

    public updateComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.update_comment');
        this._controller.updateComment(correlationId, comment, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }

    public deleteCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.delete_comment_by_id');
        this._controller.deleteCommentById(correlationId, commentId, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }

    public addMemeToComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.add_comment_meme');
        this._controller.addMemeToComment(correlationId, id, creator_id, meme_type, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }

    public removeMemeFromComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void {
         let timing = this.instrument(correlationId, 'comments.remove_comment_meme');
        this._controller.removeMemeFromComment(correlationId, id, creator_id, meme_type, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }

    public updateCommentState(correlationId: string, id: string, state: String, callback: (err: any, review: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.update_comment_state');
        this._controller.updateCommentState(correlationId, id, state, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }

    public markCommentAsDeleted(correlationId: string, id: string, callback: (err: any, review: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.mark_comment_deleted');
        this._controller.markCommentAsDeleted(correlationId, id, (err, comment) => {
            timing.endTiming();
            callback(err, comment);
        }); 
    }
    
}