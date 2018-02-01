import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <div class="container">
    <h1 class="text-center">Access denied!</h1>
  </div>
  `,
})
export class NotauthorizedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
