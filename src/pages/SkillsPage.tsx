import PageSection from "../PageSection";

const languages = {
  title: "Languages",
  items: ["JS", "Python", "C++"]
}


const SkillsPage: React.FC = () => {
    return (
        <main>
            <PageSection title={languages.title} items={languages.items}>
            </PageSection>
        </main>
    );
}

export default SkillsPage;