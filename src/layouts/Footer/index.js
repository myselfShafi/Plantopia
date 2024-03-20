import { Viewbox } from "@/components/Viewbox";
import { getCurrentYear } from "@/utils/getCurrentYear";
import {
  Facebook,
  Instagram,
  Pinterest,
  X,
  YouTube,
} from "@mui/icons-material";
import {
  Divider,
  Grid,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";

export const Footer = () => {
  const footerContent = [
    {
      id: 1,
      title: "Our Platform",
      link: [
        { text: "About Us", href: "#", ul: "hover" },
        { text: "Careers", href: "#", ul: "hover" },
        { text: "Nearby Store Locations", href: "#", ul: "hover" },
      ],
    },
    {
      id: 2,
      title: "Contact Us",
      link: [
        { text: "Message: 123 - 456 - 789", ul: "none" },
        { text: "Mon - Fri: 8 am - 8 pm IST", ul: "none" },
        { text: "Email: email@email.com", ul: "none" },
      ],
      sx: {
        pointer: "none",
      },
    },
    {
      id: 3,
      title: "Resources",
      link: [
        { text: "Customer Service", ul: "hover", href: "#" },
        { text: "Account", ul: "hover", href: "#" },
        { text: "Shipping Information", ul: "hover", href: "#" },
        { text: "Return and Refund Policy", ul: "hover", href: "#" },
        { text: "Privacy Policy", ul: "hover", href: "#" },
        { text: "Terms and Conditions", ul: "hover", href: "#" },
        { text: "FAQs (Frequently Asked Questions)", ul: "hover", href: "#" },
        { text: "Accessibility Statement", ul: "hover", href: "#" },
        { text: "Blog or Plant Care Guides", ul: "hover", href: "#" },
      ],
    },
    {
      id: 4,
      title: "Social Links",
      button: [
        { icon: <X className="mono" />, href: "https://twitter.com/" },
        {
          icon: <Instagram className="mono" />,
          href: "https://www.instagram.com/",
        },
        {
          icon: <Facebook className="mono" />,
          href: "https://www.facebook.com/",
        },
        {
          icon: <Pinterest className="mono" />,
          href: "https://www.pinterest.com/",
        },
        {
          icon: <YouTube className="mono" />,
          href: "https://www.youtube.com/",
        },
      ],
    },
  ];
  return (
    <Viewbox bgcolor={"customColors.footerBg"}>
      <Grid container spacing={2}>
        {footerContent.map((item) => {
          return (
            <Grid item key={item.id} xs={12} sm={6} lg={3}>
              <Stack>
                <Typography
                  children={item.title}
                  variant="subtitle1"
                  fontWeight={"bold"}
                  color={"customColors.light"}
                  my={"1rem"}
                />
                {item.link &&
                  item.link.map((list, idx) => (
                    <Link
                      key={idx}
                      href={list?.href}
                      underline={list.ul}
                      children={list.text}
                      mb={".5rem"}
                      sx={item.sx && { pointerEvents: item.sx?.pointer }}
                    />
                  ))}

                {item.button && (
                  <Grid container width={"70%"}>
                    {item.button.map((btn, idx) => (
                      <Grid item xs={5} textAlign={"center"} key={idx}>
                        <IconButton
                          children={btn.icon}
                          href={btn.href}
                          target="_blank"
                        />
                      </Grid>
                    ))}
                  </Grid>
                )}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      <Divider sx={{ m: "3rem 0 1rem" }} />
      <Typography
        variant="subtitle2"
        textAlign={"center"}
        color={"customColors.light"}
        children={`©${getCurrentYear()} Plantopia. All rights reserved.`}
      />
    </Viewbox>
  );
};
