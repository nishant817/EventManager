import { NgModule} from '@angular/core' 
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { 
    ProfileComponent,
    userRoutes
 } from './index'

//import { userRoutes } from './user.routes'

@NgModule({
    imports: [
        CommonModule, // instead of browser module
        RouterModule.forChild(userRoutes)
    ],
    declarations: [
        ProfileComponent
    ],
    providers: [],
    // entryComponents: [
    //     ProfileComponent
    // ]
    bootstrap: [ProfileComponent]
})

export class UserModule { };
