import { ConfigParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';
import { CommandableLambdaClient } from 'pip-services3-aws-node';
import { CommentV1 } from './CommentV1';
import { ICommentsClientV1 } from './ICommentsClientV1';
export declare class CommentsLambdaClientV1 extends CommandableLambdaClient implements ICommentsClientV1 {
    constructor(config?: any);
    configure(config: ConfigParams): void;
    getComments(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, page: DataPage<CommentV1>) => void): void;
    getCommentById(correlationId: string, commentId: string, callback: (err: any, comment: CommentV1) => void): void;
    createComment(correlationId: string, comment: CommentV1, callback: (err: any, comment: CommentV1) => void): void;
    updateComment(correlationId: string, comment: CommentV1, callback: (err: any, comment: CommentV1) => void): void;
    deleteCommentById(correlationId: string, commentId: string, callback: (err: any, comment: CommentV1) => void): void;
    addMemeToComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void;
    removeMemeFromComment(correlationId: string, id: string, creator_id: string, meme_type: string, callback: (err: any, review: CommentV1) => void): void;
    updateCommentState(correlationId: string, id: string, state: String, callback: (err: any, review: CommentV1) => void): void;
    markCommentAsDeleted(correlationId: string, id: string, callback: (err: any, review: CommentV1) => void): void;
}
