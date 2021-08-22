export interface Props {
    name: string,
    path: string;
}

const SocialButton: React.FC<Props> = (props) => {
    return (
        <a href={props.path} className="social">{props.name}</a>
    );
}

export default SocialButton;