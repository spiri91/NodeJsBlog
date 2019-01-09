import QQ from '../lib/js/myQuery';

function installTheApp(event) {
  event.prompt();
  event.userChoice.then((choice) => {
    if (choice.outcome === 'accepted') {
      console.log('User accepted the A2HS prompt');
    } else {
      console.log('User dismissed the A2HS prompt');
    }

    setTimeout(() => QQ.get.byClass.hide('installBtn-js'), 500);
  });
}


function init(event) {
  QQ.get.byClass.show('installBtn-js');
  QQ.set.byClass.click('installBtn-js', () => installTheApp(event));
}

export default function () {
  QQ.get.byClass.hide('installBtn-js');
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    init(e);
  });
}