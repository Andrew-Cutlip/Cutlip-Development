export interface Props {
    title: string;
    text: string;
    subtitle?: string;
    link?: string;
    linkTitle?: string;
};

const Card: React.FC<Props> = (props) => {
    const title =
        <h2>{ props.title }</h2>;
    const text =
        <p>{props.text}</p>;
    let sub;
    if (! (props.subtitle === undefined)) {
        sub = <h3>{ props.subtitle }</h3>
    };
    let link;
    if (! (props.link === undefined || props.linkTitle === undefined) ) {
        link = <a href={props.link}>{ props.linkTitle }</a>
    };
    return (
        <div className="Card">
            {title}
            {sub}
            {text}
            {link}
        </div>
    );
}

export default Card;