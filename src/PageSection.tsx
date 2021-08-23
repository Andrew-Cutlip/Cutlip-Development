import CollapseList from "./CollapseList";
import Card from "./Card";
export interface Props {
    title: string,
    items?: string[];
    paragraphs?: string[];
    cards?: Array<CardItem>
}

export interface CardItem {
    title: string;
    text: string;
    subtitle?: string;
    link?: string;
    linkTitle?: string;
};



const PageSection: React.FC<Props> = ({ title, items = [], paragraphs = [], cards = [] }) => {

    let cardList = cards.map((c) => {
        return (
            <Card title={c.title} text={c.text} subtitle={c.subtitle} link={c.link} linkTitle={c.linkTitle}>
            </Card>
        )
    })

    let t;

    if (cards.length) {
        t = <h2>{title}</h2>
    };

    let listItems;
    if ( items.length ) {
        listItems = (
            <CollapseList items={items} title={title}>
            </CollapseList>
        );
    };
    let p;
    if (paragraphs.length) {
        p = paragraphs.map((para, index) => {
            return (
                <p key={index}>{para}</p>
            )
        });
    };
    return (
        <section>
            { t }
            {listItems}
            {p}
            {cardList}
        </section>
    );
}

export default PageSection;