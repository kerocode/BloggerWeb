import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, } from '@angular/http';
import { PostServiceService } from './post-service.service';
import { AppComponent } from './app.component';
import { DisplayPostComponent } from './display-post/display-post.component';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './add-post/add-post.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UploadImageComponent } from './upload-image/upload-image.component';
import { LoaderComponentComponent } from './loader-component/loader-component.component';
const appRoutes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'home', component: HomePageComponent },
  { path: 'article/:id', component: DisplayPostComponent },
  { path: 'addPost', component: AddPostComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    DisplayPostComponent,
    AddPostComponent,
    HomePageComponent,
    UploadImageComponent,
    LoaderComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [PostServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
