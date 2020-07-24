import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { ICommentsClientV1 } from './ICommentsClientV1';
import { CommentV1 } from './CommentV1';

export class CommentsNullClientV1 implements ICommentsClientV1 {

    public getComments(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, page: DataPage<CommentV1>) => void): void {
            callback(null, new DataPage([], 0));
    }

    public getCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
            callback(null, null);
    }

    public createComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
            callback(null, null);
    }

    public updateComment(correlationId: string, comment: CommentV1,
        callback: (err: any, comment: CommentV1) => void): void {
            callback(null, null);
    }

    public deleteCommentById(correlationId: string, commentId: string,
        callback: (err: any, comment: CommentV1) => void): void {
            callback(null, null);
    }
}