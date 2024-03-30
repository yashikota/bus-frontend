import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import markdown from './about.md?raw';
import { Container } from "@mui/material";

export const About = () => {
    return (
        <Container sx={{ a: { color: "#20B2AA" } }}>
            <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeSanitize]}>
                {markdown}
            </ReactMarkdown>
        </Container>
    );
};
