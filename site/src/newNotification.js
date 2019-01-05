import QQ from '../lib/js/myQuery';
import call from '../lib/js/call';

function send() {
  let token = QQ.get.byId.value('token');
  let title = QQ.get.byId.value('title');
  let description = QQ.get.byId.value('description');

  call.sendNotification(token, { title, description })
    .then(() => QQ.alert.success('Sent'))
    .catch((err) => { console.log(err); QQ.alert.error('Check console'); });
}

export default {
  init: () => {
    QQ.set.byId.click('send', send);
  }
}