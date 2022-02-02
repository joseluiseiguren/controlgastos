import { DateAdapter } from '@angular/material/core';
import { Injectable } from '@angular/core';
/*import { FilesystemDirectory,
         Plugins,
         FilesystemEncoding,
         FileReadResult,
         FileDeleteResult,
         GetUriOptions,
         GetUriResult,
         ReaddirResult,
         ReaddirOptions} from '@capacitor/core';*/
//const { Filesystem } = Plugins;
import { Filesystem, Directory, Encoding, GetUriOptions, GetUriResult, FilesystemDirectory, FilesystemEncoding, FileReadResult, ReaddirResult, ReaddirOptions, ReadFileResult } from '@capacitor/filesystem';

@Injectable({
	providedIn: 'root'
})
export class FileSystemService {
    constructor() {}

    async getFileUri(options: GetUriOptions): Promise<GetUriResult> {
        const result = await Filesystem.getUri(options);
        return result;
    }

	async writeFile(fileName: string, data: string): Promise<string> {
    console.log(Directory.Data)
		await Filesystem.writeFile({
			data,
			path: fileName,
			directory: Directory.Data,
			encoding: Encoding.UTF8
		});

		return fileName;
    }

    async appendFile(fileName: string, data: string): Promise<string> {
        await Filesystem.appendFile({
            data,
            path: fileName,
            directory: Directory.Data,
            encoding: Encoding.UTF8
        });

        return fileName;
    }

	async writeBlob(fileName: string, data: string): Promise<string> {
		await Filesystem.writeFile({
			data,
			path: fileName,
			directory: Directory.Data
		});

		return fileName;
	}

	async readFile(path: string): Promise<ReadFileResult> {
    const fileReadResult = await Filesystem.readFile({
			path,
			directory: Directory.Data,
			encoding: Encoding.UTF8
		});
		return fileReadResult;
	}

	async deleteFile(path: string): Promise<void> {
		const fileDeleteResult = await Filesystem.deleteFile({
			path,
			directory: Directory.Data
		});
		return fileDeleteResult;
    }

    async readDirectory(path: string = ''): Promise<ReaddirResult> {
      console.log(Directory.Data)
        const result = await Filesystem.readdir({
            path: path,
            directory: Directory.Data
        } as ReaddirOptions);
        console.log(result)
        return result;
    }
}
