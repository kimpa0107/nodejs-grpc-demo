// package: blog
// file: blog.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class GetArticlesRequest extends jspb.Message { 
    getPage(): number;
    setPage(value: number): GetArticlesRequest;
    getSize(): number;
    setSize(value: number): GetArticlesRequest;
    getKeyword(): string;
    setKeyword(value: string): GetArticlesRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArticlesRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetArticlesRequest): GetArticlesRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArticlesRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArticlesRequest;
    static deserializeBinaryFromReader(message: GetArticlesRequest, reader: jspb.BinaryReader): GetArticlesRequest;
}

export namespace GetArticlesRequest {
    export type AsObject = {
        page: number,
        size: number,
        keyword: string,
    }
}

export class GetArticlesResponse extends jspb.Message { 
    clearItemList(): void;
    getItemList(): Array<Article>;
    setItemList(value: Array<Article>): GetArticlesResponse;
    addItem(value?: Article, index?: number): Article;

    hasExtra(): boolean;
    clearExtra(): void;
    getExtra(): Extra | undefined;
    setExtra(value?: Extra): GetArticlesResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetArticlesResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetArticlesResponse): GetArticlesResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetArticlesResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetArticlesResponse;
    static deserializeBinaryFromReader(message: GetArticlesResponse, reader: jspb.BinaryReader): GetArticlesResponse;
}

export namespace GetArticlesResponse {
    export type AsObject = {
        itemList: Array<Article.AsObject>,
        extra?: Extra.AsObject,
    }
}

export class Article extends jspb.Message { 
    getId(): string;
    setId(value: string): Article;
    getTitle(): string;
    setTitle(value: string): Article;
    getCoverImage(): string;
    setCoverImage(value: string): Article;

    hasCategory(): boolean;
    clearCategory(): void;
    getCategory(): Category | undefined;
    setCategory(value?: Category): Article;
    clearTagsList(): void;
    getTagsList(): Array<string>;
    setTagsList(value: Array<string>): Article;
    addTags(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Article.AsObject;
    static toObject(includeInstance: boolean, msg: Article): Article.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Article, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Article;
    static deserializeBinaryFromReader(message: Article, reader: jspb.BinaryReader): Article;
}

export namespace Article {
    export type AsObject = {
        id: string,
        title: string,
        coverImage: string,
        category?: Category.AsObject,
        tagsList: Array<string>,
    }
}

export class Category extends jspb.Message { 
    getId(): number;
    setId(value: number): Category;
    getName(): string;
    setName(value: string): Category;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Category.AsObject;
    static toObject(includeInstance: boolean, msg: Category): Category.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Category, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Category;
    static deserializeBinaryFromReader(message: Category, reader: jspb.BinaryReader): Category;
}

export namespace Category {
    export type AsObject = {
        id: number,
        name: string,
    }
}

export class Extra extends jspb.Message { 
    getPage(): number;
    setPage(value: number): Extra;
    getSize(): number;
    setSize(value: number): Extra;
    getTotal(): number;
    setTotal(value: number): Extra;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Extra.AsObject;
    static toObject(includeInstance: boolean, msg: Extra): Extra.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Extra, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Extra;
    static deserializeBinaryFromReader(message: Extra, reader: jspb.BinaryReader): Extra;
}

export namespace Extra {
    export type AsObject = {
        page: number,
        size: number,
        total: number,
    }
}
