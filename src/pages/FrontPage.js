import sanityClient from "../client";
import {useEffect, useState} from "react";
import {Box, Container, Typography} from "@mui/material";
import CustomPortableText from "../components/CustomPortableText";
import Footer from "../components/Footer";

const FrontPage = () => {

    const [logo, setLogo] = useState(null);
    const [text, setText] = useState(null);
    const [contactInfo, setContactInfo] = useState(null);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "frontpage" || _type == "contactInfo"]{
                  ...@,
                  logo{asset->{url}}
                }`
            )
            .then((data) => {
                console.log('DATA', data);
                const frontPage = data.filter(document => document._type === "frontpage")[0];
                const contactInfo = data.filter(document => document._type === "contactInfo")[0];
                setText(frontPage.text);
                setLogo(frontPage.logo.asset.url);
                setContactInfo(contactInfo);
            })
            .catch(console.error);
    }, []);

    return (
        text && logo && contactInfo
            ? (
                <Container
                    maxWidth
                    disableGutters={true}
                    sx={{
                        backgroundColor: 'white'
                    }}
                >
                    <Container
                        sx={{
                            paddingBottom: '40px'
                        }}
                    >
                        <Box>
                            <img
                                src={logo}
                                alt="Bevar Svankevigå logo"
                                style={{
                                    maxWidth: '100%'
                                }}
                            />
                        </Box>
                        <Typography
                            variant="subtitle1"
                        >
                            <CustomPortableText
                                value={text}
                            />
                        </Typography>
                    </Container>
                    <Footer
                        name={contactInfo.name}
                        mail={contactInfo.mail}
                        address={contactInfo.address}
                        orgNr={contactInfo.orgNumber}
                    />
                </Container>
            )
            : <></>
    )
};

export default FrontPage;