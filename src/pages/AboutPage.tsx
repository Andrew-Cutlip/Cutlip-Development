import PageSection from "../PageSection";

const bio = {
    name: "Bio",
    para: [
        `Hi my name is Andrew Cutlip. I am a senior Computer Science Student about to get my Bachelor's degree.
        I hope to go onto graduate school to get a Master's degree as well.`
    ]
};

const education = {
    name: "Education",
    cards: [
        {
            title: "University at Buffalo",
            subtitle: "B.S. Computer Science",
            text: "2019-2021"
        },
        {
            title: "Niagara County Community College",
            subtitle: "A.S. Liberal Arts: Math and Science",
            text: "2017-2019"
        }
    ]
};

export interface CardItem {
    title: string;
    text: string;
    subtitle?: string;
    link?: string;
    linkTitle?: string;
};

const courses = {
    name: "Courses",
    items: [
        "Machine Learning",
        "Computer Networking",
        "Intro to AI",
        "Intro to Web Applications",
        "Intro to Computer Vision and Image Processing",
        "Systems Programming",
        "Data Structures",
        "Discrete Math",
        "Data Models and Query Languages",
        "Intro to Algorithms",
        "STEM Communications",
        "Business Communications"
    ]
};

const clubs = {
    name: "Clubs",
    items: [
        "UB ACM",
        "UB IEEE",
        "DivTech",
        "InVenst",
        "UB Anime Club",
        "SARPA"
    ]
};

const volunteering = {
    name: "Volunteering",
    items: [
        "UB CSE-xplore",
        "My Brother's Keeper"
    ]
};

let sectionsList = [courses, clubs, volunteering];
let sections = sectionsList.map((section, index) => {
    return (
        <PageSection title={section.name} items={section.items} key={index}></PageSection>
    )
});

let cards = (
    <PageSection title={education.name} cards={education.cards}>

    </PageSection>
)

let b = (
    <PageSection title={bio.name} paragraphs={bio.para}></PageSection>
)
const AboutPage: React.FC = () => {
    return (
        <main>
            {b}
            {cards}
            {sections}
        </main>
    );
}

export default AboutPage;