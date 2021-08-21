import CollapseList from "./CollapseList";
export interface Props {
    title: string,
    items?: string[];
    paragraphs?: string[];
}


const PageSection: React.FC<Props> = ({title, items = [], paragraphs= []}) => {

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
            {listItems}
            {p}
        </section>
    );
}

export default PageSection;