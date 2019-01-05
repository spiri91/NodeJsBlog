export const newNotification = `
  <div class='newNotification'>
    <style>
      .newNotification .row{
        padding: 1rem !important;
      }
    </style>
    <div class='row'>
      <div class='col-sm-12'>
        <input type='text' class='form-control' placeholder='token' id='token'/> 
      </div>
    </div>
    <div class='row'>
      <div class='col-sm-12'>
        <input type='text' class='form-control' placeholder='title' id='title'/> 
      </div>
    </div>
    <div class='row'>
      <div class='col-sm-12'>
        <input type='text' class='form-control' placeholder='description' id='description'/> 
      </div>
    </div>
    <div class='row'>
      <div class='col-sm-2 col-sm-offset-2'>
        <button class='btn btn-success' id='send'>Send</button>
      </div>
    <div>
  </div>
`