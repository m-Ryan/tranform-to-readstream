/// <reference types="node" />
import { Readable } from 'stream';
interface ReadableOption {
    highWaterMark?: number;
    encoding?: string;
    objectMode?: boolean;
}
export default class TranformToReadStream extends Readable {
    data: any;
    options: ReadableOption;
    constructor(data: any, options?: ReadableOption);
    _read(): void;
}
export {};
