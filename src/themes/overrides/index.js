import Badge from "./badge";
import Buttons from "./buttons";
import Cssbaseline from "./cssbaseline";
import Divider from "./divider";
import Icons from "./icon";
import InputBase from "./inputbase";

export default {
  ...InputBase(),
  ...Icons(),
  ...Buttons(),
  ...Badge(),
  ...Divider(),
  ...Cssbaseline(),
};
