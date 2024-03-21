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
import Select from "./select";
import Table from "./tables";
import Tooltip from "./tooltip";

const overrides = () => {
  const inputBase = InputBase();
  const icons = Icons();
  const buttons = Buttons();
  const badge = Badge();
  const divider = Divider();
  const cssbaseline = Cssbaseline();
  const imagelist = Imagelist();
  const paper = Paper();
  const links = Links();
  const dropdowns = Dropdowns();
  const tooltip = Tooltip();
  const chip = Chip();
  const cards = Cards();
  const list = List();
  const accordion = Accordion();
  const table = Table();
  const select = Select();

  return Object.assign(
    inputBase,
    icons,
    buttons,
    badge,
    divider,
    cssbaseline,
    imagelist,
    paper,
    links,
    dropdowns,
    tooltip,
    chip,
    cards,
    list,
    accordion,
    table,
    select
  );
};

export default overrides;
