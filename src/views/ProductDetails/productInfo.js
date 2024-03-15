import { InfoTable } from "@/components/CustomTable/infoTable";
import { Viewbox } from "@/components/Viewbox";
import { Typography } from "@mui/material";

const information = [
  {
    title: "Description",
    desc: "Neem Oil is a natural plant care product derived from the seeds of the neem tree. It is prized for its insecticidal, antifungal, and antibacterial properties, making it an effective solution for controlling pests and diseases on plants. Neem Oil can be used as a foliar spray or soil drench to prevent and treat common garden problems such as aphids, mites, and powdery mildew.",
  },
  {
    title: "Specifications",
    table: [
      {
        type: "Plant height",
        value: "6-7 inches(15-30 cm)",
      },
      {
        type: "Plant spread",
        value: "3-5 inches(7-13cm)",
      },
    ],
  },
];

export const ProductInfo = () => {
  return (
    <Viewbox>
      {information.map((section, idx) => {
        return (
          <div key={idx}>
            <Typography variant="h5" children={section.title} my={"2rem"} />
            {section?.desc && (
              <Typography variant="body1" children={section?.desc} />
            )}
            {section?.table && (
              <InfoTable
                sx={{ minWidth: "15rem", maxWidth: "fit-content" }}
                data={section?.table}
              />
            )}
          </div>
        );
      })}
    </Viewbox>
  );
};
