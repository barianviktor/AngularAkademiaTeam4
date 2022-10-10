import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-edit-note',
  templateUrl: './edit-note.component.html',
  styleUrls: ['./edit-note.component.scss'],
})
export class EditNoteComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    console.log(route);
    route.params.subscribe((x) => {
      console.log(x);
    });
  }

  ngOnInit(): void {}
}
