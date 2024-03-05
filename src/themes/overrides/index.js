import Badge from "./badge";
import Buttons from "./buttons";
import Cssbaseline from "./cssbaseline";
import Divider from "./divider";
import Icons from "./icon";
import Imagelist from "./imagelist";
import InputBase from "./inputbase";
import Paper from "./paper";

export default {
  ...InputBase(),
  ...Icons(),
  ...Buttons(),
  ...Badge(),
  ...Divider(),
  ...Cssbaseline(),
  ...Imagelist(),
  ...Paper(),
};
