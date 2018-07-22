import { Component } from "@angular/core";

@Component({
    selector:'my-app',
    templateUrl:'app.component.html'
})


export class AppComponent{ // export used for because we are using it in root module
    title: string = "Welcome to Synechron Pvt Ltd";
    subtitle: string = "Core Development Center, Pune!";    
    clickevnt : number = 0;
    changeMyTile () : void {
        this.title = "New Title";        
    }
}