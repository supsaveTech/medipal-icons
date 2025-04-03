document.addEventListener("DOMContentLoaded", function () {
  var installapp = document.querySelector('#install-app');
  var installapp2 = document.querySelector('#install-app-2');

  if (installapp) {
    installapp.addEventListener('click', function () {
      if (typeof deferredPrompt !== 'undefined' && deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(function(choiceResult) {
          console.log(choiceResult.outcome);
          if (choiceResult.outcome === 'dismissed') {
            console.log('User cancelled installation');
          } else {
            console.log('User added to home screen');
          }
        });

        deferredPrompt = null;
      }
    });
  }

  if (installapp2) {
    installapp2.addEventListener('click', function () {
      if (typeof deferredPrompt !== 'undefined' && deferredPrompt) {
        deferredPrompt.prompt();

        deferredPrompt.userChoice.then(function(choiceResult) {
          console.log(choiceResult.outcome);
          if (choiceResult.outcome === 'dismissed') {
            console.log('User cancelled installation');
          } else {
            console.log('User added to home screen');
          }
        });

        deferredPrompt = null;
      }
    });
  }

});
