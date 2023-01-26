type Props = {
    text: string;
    image: any;
}


export default function PictureBox2({text, image}: Props) {



    return (
      <div className="PictureBox2">
        <div className="PictureText">{text}</div>
        <img className="ImageFix" src={image}></img>
      </div>
    );
  }
  