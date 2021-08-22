import SocialButton from "../SocialButton";

const social = [
    {
        path: "twitter.com",
        name: "Twitter"
    },
    {
        path: "linkedin",
        name: "LinkedIn"
    }
]

const ContactPage: React.FC = () => {

    const soc = social.map((s) => {
        return (
            <SocialButton name={s.name} path={s.path}>
            </SocialButton>
        )
    });
    return (
        <main>
            { soc }
        </main>
    );
}

export default ContactPage;