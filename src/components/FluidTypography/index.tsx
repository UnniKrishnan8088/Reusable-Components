import { Typography, TypographyProps } from "@mui/material";

interface IFluidTypographyProps extends TypographyProps {
  fontSize: number;
  children: React.ReactNode;
}

export default function FluidTypography({
  children,
  fontSize,
  ...props
}: IFluidTypographyProps) {

  const xsFontSize = `${(fontSize * 100) / 600}vw`;
  const smFontSize = `${(fontSize * 100) / 900}vw`;
  const mdFontSize = `${(fontSize * 100) / 1200}vw`;
  const lgFontSize = `${(fontSize * 100) / 1536}vw`;
  
  return (
    <Typography
      {...props}
      sx={{
        fontSize: {
          xs: xsFontSize,
          sm: smFontSize,
          md: mdFontSize,
          xl: lgFontSize,
        },
      }}
    >
      {children}
    </Typography>
  );
}
