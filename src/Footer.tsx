
export interface Props {
    name: string;
}


const Footer: React.FC<Props> = (props) => {
    return (
        <footer className="foot">
            <p>{ props.name }</p>
        </footer>
    );
}

export default Footer;