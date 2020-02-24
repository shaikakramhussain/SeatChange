import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CompCommunication';
 
  addressFunction() 
{ 
  if (document.getElementById('same').checked) 
  { 
    document.getElementById('secondaryaddress').value=document. 
             getElementById('primaryaddress').value; 
    document.getElementById('secondaryzip').value=document. 
             getElementById('primaryzip').value 
  } 
  else
  { 
    document.getElementById('secondaryaddress').value=""; 
    document.getElementById('secondaryzip').value="";
  } 
}
}
