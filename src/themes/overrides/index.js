import Table from "./table";
import Checkbox from "./checkbox";
import Stepper from "./stepper";
import Chip from "./chip";
import Breadcrumb from "./breadcrumb";
import Tooltip from "./tooltip";
import Switch from "./switches";
import Toolbar from "./toolbar";
import List from "./list";
import Pagination from "./pagination";
import LinearProgress from "./linearprogress";
import Radio from "./radio";
import Form from "./forms";
import Alert from "./alert";
import Link from "./link";
import InputBase from "./inputbase";
import Menu from "./menus";
import Dialog from "./dialogs";
import ToggleButtons from "./togglebutton";
import ButtonGroup from "./buttongroups";
import OutlinedInput from "./outlineinput";
import Rating from "./rating";
import Button from "./buttons";
import Cards from "./cards";
import Badge from "./badge";

export default {
  ...Alert(),
  ...Badge(),
  ...Breadcrumb(),
  ...ButtonGroup(),
  ...Button(),
  ...Cards(),
  ...Checkbox(),
  ...Chip(),
  ...Dialog(),
  ...Form(),
  ...InputBase(),
  ...LinearProgress(),
  ...Link(),
  ...List(),
  ...Menu(),
  ...OutlinedInput(),
  ...Pagination(),
  ...Radio(),
  ...Rating(),
  ...Stepper(),
  ...Switch(),
  ...Table(),
  ...ToggleButtons(),
  ...Toolbar(),
  ...Tooltip(),
};
