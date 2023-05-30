
/////search offcancas
    // create offcanvas menu dynamically
    function createOffcanvasMenu() {
        // Create the offcanvas container
        var offcanvas = document.createElement('div');
        offcanvas.id = 'myOffcanvas';
        offcanvas.classList.add('offcanvas');
        
        // Create the offcanvas content
        var offcanvasContent = document.createElement('div');
        offcanvasContent.classList.add('offcanvas-content');
  
          offcanvasContent.innerHTML = `
          <h1 id="close" >search</h1>
          <div><input type="text" placeholder="Search"></div>
          <div>REcents</div>
        `;
        offcanvas.appendChild(offcanvasContent);
  
        // Append the offcanvas menu to the body
        document.body.appendChild(offcanvas);
      }
  // calling the function
      createOffcanvasMenu();
      
      // Attach event listener to toggle button
      var canvasButton = document.getElementById('canvasButton');
      var close= document.getElementById('close');
  
      canvasButton.addEventListener('click', ()=>{
        var offcanvas = document.getElementById('myOffcanvas');
        offcanvas.classList.toggle('open');
      });
  
  
      close.addEventListener('click', ()=>{
        var offcanvas = document.getElementById('myOffcanvas');
        offcanvas.classList.remove('open');
      });



      ////more offcanvas///
///create a div//

  // create offcanvas menu dynamically
  function moreOffcanvasMenu() {
    // Create the offcanvas container
    var moreslider = document.createElement('div');
    moreslider.classList.add('moreoffcanvas');
    
    // Create the offcanvas content
    var moreoffcanvasContent = document.createElement('div');
    moreoffcanvasContent.classList.add('morecontent');

    
    moreoffcanvasContent.innerHTML = `
    <div class="set">
    <div><ion-icon name="settings-outline"></ion-icon>setting</div>
    <div><ion-icon name="timer-outline"></ion-icon>your activity</div>
    <div><ion-icon name="bookmark-outline"></ion-icon>saved</div>
    <div><ion-icon name="sunny-outline"></ion-icon>Switch Apperance</div>
    <div><ion-icon name="alert-circle-outline"></ion-icon>Switch Accounts</div>
  </div>
 <div class="log">
  <div>switch accounts</div>
 <div>LOgout</div>
 </div>
    `;
    moreslider.appendChild(moreoffcanvasContent);

    // Append the offcanvas menu to the body
    document.body.appendChild(moreslider);
  }
// calling the function
  moreOffcanvasMenu();

  var morebutton = document.getElementById("morebutton");
  var moreslider=  document.querySelector(" .moreoffcanvas");

  morebutton.addEventListener("click", ()=>{
    moreslider.classList.toggle('active');
  
  })




      


    

