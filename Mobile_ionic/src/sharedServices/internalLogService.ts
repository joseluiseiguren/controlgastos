/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { UrlService } from 'src/services/url.service';
import { Injectable } from '@angular/core';
import { FileSystemService } from './fileSystemService';
import { HttpClient } from '@angular/common/http';
//import { environment } from '../../../environments/environment';
//import { FilesystemDirectory, GetUriOptions } from "@capacitor/core";
////import { CustomDialogsService } from "./custom-dialogs.service";
//import { File, FileEntry } from '@ionic-native/file/ngx';
//import { HttpService } from 'src/app/shared/services/http.service';
//import { getDateUTCFormatted } from "../utils/date-utils";

@Injectable({
    providedIn: 'root'
})
export class InternalLogService {
    readonly LOGGING_FILE_NAME = 'moneyguard-log.txt';

    constructor(private fileSystemService: FileSystemService,
                private urlService: UrlService,
                private httpClient: HttpClient)
    {
    }

    async createLogFile() {
        try {
            //await this.deletePreviousLogFiles();
            const logFileExists = await this.logFileExists();
            if (!logFileExists) {
                await this.fileSystemService.writeFile(this.getFileName(), this.logFileTitle());
                console.log('INTERNAL LOG - Log file created!');
                //alert('INTERNAL LOG - Log file created!')
                return;
            }
            console.log('INTERNAL LOG - Log file is already created');
            //alert('INTERNAL LOG - Log file is already created')
        }
        catch(err) {
            console.error('INTERNAL LOG - Create log file', err);
        }
    }

    async addLog(logMessage: string) {
        await this.fileSystemService.appendFile(this.getFileName(), `${logMessage} \n`);
    }

    /*
    async uploadInternalLogFile() {
        const fileUri = await this.fileSystemService.getFileUri({path: this.getFileName(), directory: FilesystemDirectory.Data} as GetUriOptions);
        this.file.resolveLocalFilesystemUrl(fileUri.uri)
            .then(entry => (<FileEntry>entry).file(file => this.handleLogFile(file)))
            .catch(err => console.log(err));
    }
    */

    async uploadInternalLogFile(): Promise<void> {
      const fileContent = await this.fileSystemService.readFile(this.getFileName());

      await this.httpClient.post(this.urlService.urlPostInternalLog(), {FileName: this.getFileName(), LogContent: fileContent.data}).toPromise();
  }


    private async logFileExists(): Promise<boolean> {
      try {
          await this.fileSystemService.readFile(this.getFileName());
          return true;
      }
      catch(err) {
          return false;
      }
    }

    private logFileTitle(): string {
        return `**********************\n` +
               ` Money Guard LOG FILE \n` +
               `**********************\n\n`;
    }

    private async deletePreviousLogFiles() {
        try {
            const result = await this.fileSystemService.readDirectory();
            if (result?.files?.length) {
                for (const file of result.files) {
                    if (file.startsWith('moneyguard-log')) {
                        if (!file.includes(this.getCurrentDate())) {
                            await this.fileSystemService.deleteFile(file);
                        }
                    }
                }
            }
        }
        catch(err) {
            console.error('INTERNAL LOG - Delete Previous log files ERROR', err);
        }
    }

    //Manage and upload log file functions
    /*
    private handleLogFile(file: any) {
        this.customDialogService.openLoadingDialog('Uploading log file');
        const reader = this.getFileReader();
        console.log("reading file", file);
        reader.onloadend = async() => {
            try {
                const formData = new FormData();
                const imgBlob = new Blob([reader.result], {type: file.type});
                formData.append('file', imgBlob, this.getFileName());
                await this.uploadFormData(formData);
                this.customDialogService.closeLoadingDialog();
            }
            catch(err) {
                this.customDialogService.closeLoadingDialog();
            }
        };
        reader.readAsArrayBuffer(file);
    }
    */

    /*
    private async uploadFormData(formData: FormData): Promise<any> {
        try {
            await this.httpService.post(`${environment.inspectionToolUrl}/api/logfile`, formData, true);
        }
        catch(err) {
            throw(err);
        }
    }
    */

    private getFileName(): string {
        const date = this.getCurrentDate();
        return `moneyguard-log-${date}.txt`;
    }


    private getCurrentDate(): string {
        return this.getDateUTCFormatted().replace(/\//g,'-');
    }


    private getFileReader(): FileReader {
        const fileReader = new FileReader();
        const zoneOriginalInstance = (fileReader as any)["__zone_symbol__originalInstance"];
        return zoneOriginalInstance || fileReader;
    }

    private getDateUTCFormatted(): string {
      return new Date().toLocaleDateString('en-GB');
    }
}
