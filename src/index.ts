import { Readable } from 'stream';
interface ReadableOption {
	highWaterMark?: number;
	encoding?: string;
	objectMode?: boolean;
}
export default class TranformToReadStream extends Readable {
	data: any;
	options: ReadableOption = {
		highWaterMark: 16,
		encoding: 'utf8',
		objectMode: false
	};
	constructor(data: any, options?: ReadableOption) {
		super(options);
		this.data = data;
	}

	_read() {
		process.nextTick(() => {
			let buffer = this.data;
			if (!Buffer.isBuffer(buffer)) {
				buffer = new Buffer(this.data, this.options.encoding);
			}
			this.push(buffer);
			this.push(null);
		});
	}
}
