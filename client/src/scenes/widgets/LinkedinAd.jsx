import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const LinkedinAd = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:5001/assets/info1.jpeg"
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Eat Burger Grill</Typography>
        <Typography color={medium}>eatburgergrill.com</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Savor the satisfaction of a juicy, flavorful burger—grilled to perfection, topped with fresh ingredients, and served just the way you like it.
      </Typography>
    </WidgetWrapper>
  );
};

export default LinkedinAd;
