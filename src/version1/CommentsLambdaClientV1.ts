import { ConfigParams } from 'pip-services3-commons-node';
import { IReferences } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';

import { CommentV1 } from './CommentV1';
import { ICommentsClientV1 } from './ICommentsClientV1';

export class CommentsLambdaClientV1 extends CommandableLambdaClient implements ICommentsClientV1 {

    constructor(config?: any) {
        super('comments');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }


    public configure(config: ConfigParams): void {
        super.configure(config);
    }

    public getComments(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CommentV1>) => void): void {
        this.callCommand(
            'get_comments',
            correlationId,
            {
                filter: filter,
                paging: paging
            },
            callback
        );
    }

    public getCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
        this.callCommand(
            'get_comment_by_id',
            correlationId,
            {
                comment_id: commentId
            },
            callback
        );
    }

    public createComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.create_comment');
        this.callCommand(
            'create_comment',
            correlationId,
            {
                comment: comment
            },
            callback
        );
    }

    public updateComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
        this.callCommand(
            'update_comment',
            correlationId,
            {
                comment: comment
            },
            callback
        );
    }

    public deleteCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.delete_comment_by_id');
        this.callCommand(
            'delete_comment_by_id',
            correlationId,
            {
                comment_id: commentId
            },
            callback
        );
    }

    public addMemeToComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.add_comment_meme');
        this.callCommand(
            'add_comment_meme',
            correlationId,
            {
                id: id,
                creator_id: creator_id,
                meme_type: meme_type
            },
            callback
        );
    }

    public removeMemeFromComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.remove_comment_meme');
        this.callCommand(
            'remove_comment_meme',
            correlationId,
            {
                id: id,
                creator_id: creator_id,
                meme_type: meme_type
            },
            callback
        );
    }

    public updateCommentState(correlationId: string, id: string, state: String, callback: (err: any, review: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.update_comment_state');
        this.callCommand(
            'update_comment_state',
            correlationId,
            {
                id: id,
                state: state
            },
            callback
        );
    }

    public markCommentAsDeleted(correlationId: string, id: string, callback: (err: any, review: CommentV1) => void): void {
        let timing = this.instrument(correlationId, 'comments.mark_comment_deleted');
        this.callCommand(
            'mark_comment_deleted',
            correlationId,
            {
                id: id
            },
            callback
        );

    }

}