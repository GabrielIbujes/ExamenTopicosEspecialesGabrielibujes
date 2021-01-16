// dashboard.page.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthenticateService } from '../services/authentication.service';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import * as crypto from 'crypto-js'; 
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';

interface messageData {
  Name: string;
  Message: string;
  CreateDate: Date;
  Image: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  @ViewChild('content') content: any;
  messageList = [];
  messageData: messageData;
  messageForm: FormGroup;

  userEmail: string;
  passEnc : string;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  UploadedFileURL: Observable<string>;


  //detalles de la cargad de archivo
  fileName:string;
  fileSize:number;

  //estado
  isUploading:boolean;
  isUploaded:boolean;

  
  constructor(
    private navCtrl: NavController,
    private authService: AuthenticateService,
    private firebaseService: FirebaseService,
    private storage: AngularFireStorage, 
    private database: AngularFirestore
  ) { 
    this.messageData = {} as messageData;
    this.isUploading = false;
    this.isUploaded = false;
  }

  ngOnInit() {
    this.passEnc = '123123';
    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.messageData.Name = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })

    this.firebaseService.read_messages().subscribe(data => {
      console.log("Gabo", this.messageList);
      this.messageList = data.map(e => {
        if(e.payload.doc.data()['Image']){
          return {
            id: e.payload.doc.id,
            isEdit: false,
            Name: e.payload.doc.data()['Name'],
            Message:crypto.AES.decrypt(e.payload.doc.data()['Message'], this.passEnc).toString(crypto.enc.Utf8),
            Image: crypto.AES.decrypt(e.payload.doc.data()['Image'], this.passEnc).toString(crypto.enc.Utf8),
          };
        }
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Message:crypto.AES.decrypt(e.payload.doc.data()['Message'], this.passEnc).toString(crypto.enc.Utf8)
        };
      })

    });

  }

  CreateRecord() {
    this.passEnc = '123123';
    
    this.messageData.CreateDate = new Date();
    
    this.messageData.Message = crypto.AES.encrypt(this.messageData.Message, this.passEnc).toString();
    

    console.log(this.messageData.Message + ' Encriptado');

    this.firebaseService.create_message(this.messageData)
      .then(resp => {
        this.messageData.Message = null;
      })
      .catch(error => {
        console.log(error);
      });
  }

  uploadFile(event: FileList) {
    
    const file = event.item(0)
    if (file.type.split('/')[0] !== 'image') { 
     console.error('archivo demasiado pesado o posee un formato distinto')
     return;
    }

    this.isUploading = true;
    this.isUploaded = false;

    this.fileName = file.name;
    const path = `${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'carga de imagenes' };
    const fileRef = this.storage.ref(path);
    this.task = this.storage.upload(path, file, { customMetadata });
    this.percentage = this.task.percentageChanges();
    this.snapshot = this.task.snapshotChanges().pipe(
      
      finalize(() => {
        this.passEnc = '123123';
        this.UploadedFileURL = fileRef.getDownloadURL();
        this.UploadedFileURL.subscribe(resp=>{
          this.messageData.Image = crypto.AES.encrypt(resp, this.passEnc).toString();
        },error=>{
          console.error(error);
        })
      })
    )
  }  


  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }

}