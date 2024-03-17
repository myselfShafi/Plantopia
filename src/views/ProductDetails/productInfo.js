import { InfoTable } from "@/components/CustomTable/infoTable";
import { Viewbox } from "@/components/Viewbox";
import { ArrowRightAlt } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

export const ProductInfo = ({ data }) => {
  const information = [
    {
      title: "Description",
      desc: data?.description,
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
    {
      title: "Key requirements",
      desc: "Choosing the right location for your plant is crucial for its health and well-being. Here are some tips:",
      list: [
        {
          tag: "Indirect Light",
          text: `${data.name} thrive in bright, indirect light. Avoid placing them in direct sunlight, as this can scorch their delicate leaves. A north or east-facing window is ideal.`,
        },
        {
          tag: "Temperature",
          text: `Maintain a consistent indoor temperature between 65-80°F (18-27°C). Keep the plant away from drafts and cold windows in the winter.`,
        },
        {
          tag: "Humidity",
          text: `${data.name} prefer higher humidity levels. You can increase humidity by misting the leaves regularly or placing a tray of water near the plant.`,
        },
        {
          tag: "Container",
          text: `Ensure your pot has drainage holes to prevent overwatering. Repot your ${data.name} when it outgrows its container.`,
        },
      ],
    },
  ];

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
            {section?.list &&
              section?.list.map((each, idx) => {
                return (
                  <Stack
                    flexDirection={"row"}
                    key={idx}
                    m={"2rem"}
                    gap={"1rem"}
                    alignItems={"flex-start"}
                  >
                    <ArrowRightAlt fontSize="small" />
                    <Typography variant="subtitle1">
                      <Typography
                        component={"span"}
                        fontWeight={800}
                        textTransform={"uppercase"}
                        children={`${each.tag}: `}
                      />
                      {each.text}
                    </Typography>
                  </Stack>
                );
              })}
          </div>
        );
      })}
    </Viewbox>
  );
};
