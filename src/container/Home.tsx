import axiosApi from "../axios/AxiosAPI.tsx";
import {useEffect, useState} from "react";
import {Card, CardContent, Container, Typography} from "@mui/material";
interface Post {
    editorContent: string;
    title: string;
}

interface PostsResponse {
    [key: string]: Post;
}

const Home = () => {
    const [dataDB , setDataDB] = useState<PostsResponse >()

    useEffect(() => {
        axiosApi.get<PostsResponse >('/posts.json')
            .then(response => {
                setDataDB(response.data);
            })
    }, []);

    console.log(dataDB)
    return (
        <Container>
                {dataDB ? (
                    Object.entries(dataDB).map(([key, post]) => (
                        <Card key={key} sx={{ maxWidth: 345, borderRadius: '10px', marginTop: '20px'}}>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" dangerouslySetInnerHTML={{ __html: post.editorContent }} />
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography variant="h6" component="p">
                        There is nothing...
                    </Typography>
                )}
        </Container>
    );
};

export default Home;