import { Injectable } from '@angular/core'

declare let toastr; // this will let ts know that toastr has been declared somewhere else and is ready to be used

@Injectable()
export class ToastrService {
    success(msg: string, title?: string) {
        toastr.success(msg, title);
    };
    info(msg: string, title?: string) {
        toastr.info(msg, title);
    };
    warning(msg: string, title?: string) {
        toastr.warning(msg, title);
    };
    error(msg: string, title?: string){
        toastr.error(msg, title);
    }
}