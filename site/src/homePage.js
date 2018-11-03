import QQ from '../lib/js/myQuery';
import { pagination } from '../lib/templates/pagination';
import call from '../lib/js/call';

export default {
  init: async () => {
    let res = await call.getCount();

    alert(res.count);

    QQ.set.byId.innerHtml("Pagination", pagination);
  }
}