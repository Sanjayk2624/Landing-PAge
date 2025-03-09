import { SvgIconProps } from "../types";
import { StyledImage } from '../../pages/Home/styles';

export const SvgIcon = ({ src, width, height }: SvgIconProps) => (
  <StyledImage src={`/img/svg/${src}`} alt={src} width={width} height={height} />
);
