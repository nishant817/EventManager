import { NgModule} from '@angular/core' 
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { ProfileComponent } from './profile.component'
import { userRoutes } from './user.routes'
import  { LoginComponent } from './login.component'
import { from } from 'rxjs';

// import { 
//     ProfileComponent,
//     userRoutes
//  } from './index'

//import { userRoutes } from './user.routes'

@NgModule({
    imports: [
        CommonModule, // instead of browser module
        RouterModule.forChild(userRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
        ProfileComponent,
        LoginComponent
    ],
    providers: [],
    // entryComponents: [
    //     ProfileComponent
    // ]
    bootstrap: [ProfileComponent]
})

export class UserModule { };
