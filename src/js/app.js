var deferredPrompt;

// Register Service Worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
    .then(function(registration) {
        console.log('Medipal Pharmacy Service Worker Registered!', registration);    
    })
    .catch(function(error) {
        console.error('Service Worker Registration Failed:', error);
    });
}

// Handle Install Prompt for Android
window.addEventListener('beforeinstallprompt', function(event) {
    console.log('beforeinstallprompt fired');
    event.preventDefault(); 
    deferredPrompt = event;

    // Show install button only on Android
    document.getElementById('installButton').style.display = 'block';

    return false;
});

// Detect iOS and Show Installation Instructions
function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

window.addEventListener('load', function() {
    if (isIOS()) {
        console.log("iOS detected, showing install instructions.");
        document.getElementById('iosInstallInstructions').style.display = 'block';
    }
});

// Function to Trigger Install on Android
function installPWA() {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        deferredPrompt.userChoice.then(function(choiceResult) {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted the install prompt');
            } else {
                console.log('User dismissed the install prompt');
            }
            deferredPrompt = null;
        });
    }
}
