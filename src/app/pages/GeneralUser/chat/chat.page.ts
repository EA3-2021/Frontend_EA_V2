import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  data:any;
  message = '';
  messages = [];
  protected currentUser : string = '';

  constructor(private socket: Socket,
    private toastCtrl: ToastController,
    private router: Router,
    private route: ActivatedRoute,
    public menu: MenuController) {
    this.data = this.route.snapshot.paramMap.get('workerID'); }

  ngOnInit(): void {
       this.socket.connect();

       let name = this.data;        //`User-${new Date().getTime()} `;
       this.currentUser = name;

       this.socket.emit('set-name', name);

       this.socket.fromEvent('users-changed').subscribe(data => {
           console.log('got data: ', data);
           let user = data['user'];

           if (data['event'] == 'left'){
             this.showToast(`User left: ${user}`);
           } else {
             this.showToast(`User joined: ${user}`);
           }
       });

       this.socket.fromEvent('message').subscribe(message => {
           console.log('New: ', message);
           this.messages.push(message);
       })

       this.menu1();

   }

   menu1() {
    this.menu.enable(true, 'menu1');
  }

  obtainID(){
    localStorage.setItem('workerID', this.data);
  }

   sendMessage(){
       this.socket.emit('send-message', {text: this.message});
       this.message='';
   }

   ionViewWillLeave(){
       this.socket.disconnect();
   }

   async showToast(msg){
     let toast = await this.toastCtrl.create({
       message: msg,
       position: 'top',
       duration: 2000
     });
     toast.present();
     }

}
