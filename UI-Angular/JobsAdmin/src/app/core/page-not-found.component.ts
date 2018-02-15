import { Component, OnInit } from '@angular/core';

@Component({
  template: `
  <!DOCTYPE html>
  <html>

      <head>
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <title>MyCareer - 404</title>
          <link rel="stylesheet" type="text/css" href="../assets/layout/css/layout.css">
          <link rel="stylesheet" type="text/css" href="../assets/layout/css/primeng.min.css">
      </head>

      <body class="exception-body">
          <div class="exception-wrapper notfound">
              <img src="../assets/layout/images/404.png" />

              <p class="message-title">Page Not Found!</p>
              <p class="message-summary">The resource you are looking for does not exist.</p>

              <a href="/">
                  <i class="fa fa-home"></i>
                  <span>Dashboard</span>
              </a>

              <div class="login-footer">MyCareer</div>
          </div>

      </body>

  </html>
  `,
  styles: []
})
export class PageNotFoundComponent {
}
