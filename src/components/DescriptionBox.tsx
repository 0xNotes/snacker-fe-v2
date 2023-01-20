import { stringify } from "querystring";

type Props = {
  description: string;
};

export default function DescriptionBox({ description }: Props) {
  return <div>{description};</div>;
}
