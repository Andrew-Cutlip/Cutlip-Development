export interface Props {
    src: string;
    alt: string;
};

const Jumbo: React.FC<Props> = (props) => {
    return (
        <img src={props.src} alt={props.alt}>
        </img>
    );
};

export default Jumbo;