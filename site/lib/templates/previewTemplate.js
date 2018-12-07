export const previewTemplate = `
  <head>
    <meta charset="utf-8">

    <title>The HTML5 Herald</title>
    <meta name="description" content="The HTML5 Herald">
    <meta name="author" content="SitePoint">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
    
    <style>
      {{css}}
    </style>

  </head>

  <body>
    <div class='mainContent'>
      {{{content}}}
    </div>

    <script>
      {{jsScript}}
    </script>

  </body>
  </html>
`