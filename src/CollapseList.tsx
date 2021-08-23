import { useState } from "react";

export interface Props {
    title: string,
    items: string[];
}


const CollapseList: React.FC<Props> = (props) => {

    const [hidden, setHidden] = useState(false);
    const items = props.items.map((item, index) => {
        return (
            <li key={index}>{item}</li>
        )
    });
    let list;
    if (!hidden) {
        list = items;
    }
    return (
        <div className="collapse">
                <h2 onClick={() => setHidden(! hidden)} className="collapseTab">{props.title}</h2>
            {list}
        </div>
    );
}

export default CollapseList;