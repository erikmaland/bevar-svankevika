import {PortableText} from "@portabletext/react";

const components = {
    block: {
        h1: ({children}) => <h1 style={{ fontSize: '150px', lineHeight: '1em', marginBlockStart:  0, marginBlockEnd: 0}}>{children}</h1>,
        h2: ({children}) => <h2 style={{ fontSize: '90px', lineHeight: '1em', marginBlockStart: 0, marginBlockEnd: 0 }}>{children}</h2>,
        h3: ({children}) => <h3 style={{ fontSize: '50px', lineHeight: '1em', marginBlockStart: 0, marginBlockEnd: 0 }}>{children}</h3>,
        h4: ({children}) => <h4 style={{ fontSize: '30px', lineHeight: '1em', marginBlockStart: 0, marginBlockEnd: 0 }}>{children}</h4>,
        h5: ({children}) => <h5 style={{ fontSize: '22px', lineHeight: '1em',marginBlockStart: 0, marginBlockEnd: 0 }}>{children}</h5>,
        h6: ({children}) => <h6 style={{ fontSize: '18px', lineHeight: '1em', marginBlockStart: 0, marginBlockEnd: 0 }}>{children}</h6>,
    },
}

const CustomPortableText = ({
    value
}) => {
    return (
        <PortableText
            value={value}
            components={components}
        />
    );
};

export default CustomPortableText;