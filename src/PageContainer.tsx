import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import HomePage from "./pages/HomePage";
import PortfolioPage from "./pages/PortfolioPage";
export interface Props {
    page: string;
};


let pages = new Map();
pages.set("/about", <AboutPage></AboutPage>);
pages.set("/contact", <ContactPage></ContactPage>);
pages.set("/skills", <SkillsPage></SkillsPage>);
pages.set("/home", <HomePage></HomePage>);
pages.set("/portfolio", <PortfolioPage></PortfolioPage>);

const PageContainer: React.FC<Props> = (props) => {
    let page = pages.get(props.page);
    return (
        <main>
            {page}
        </main>
    );
}

export default PageContainer;