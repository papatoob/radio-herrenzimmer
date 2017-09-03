import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  // Gibt an, ob die lange Version des Intros angezeigt werden soll
  showMore: boolean;

  // Erstellt ein neues Objekt vom Typ IntroComponent
  constructor() {
    this.showMore = false;
  }

  // Wird beim Initialisieren der Komponente ausgeführt
  ngOnInit() {
  }

}
