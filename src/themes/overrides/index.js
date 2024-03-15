import Accordion from "./accordion";
import Badge from "./badge";
import Buttons from "./buttons";
import Cards from "./cards";
import Chip from "./chips";
import Cssbaseline from "./cssbaseline";
import Divider from "./divider";
import Dropdowns from "./dropdowns";
import Icons from "./icon";
import Imagelist from "./imagelist";
import InputBase from "./inputbase";
import Links from "./links";
import List from "./list";
import Paper from "./paper";
import Table from "./tables";
import Tooltip from "./tooltip";

export default {
  ...InputBase(),
  ...Icons(),
  ...Buttons(),
  ...Badge(),
  ...Divider(),
  ...Cssbaseline(),
  ...Imagelist(),
  ...Paper(),
  ...Links(),
  ...Dropdowns(),
  ...Tooltip(),
  ...Chip(),
  ...Cards(),
  ...List(),
  ...Accordion(),
  ...Table(),
};
