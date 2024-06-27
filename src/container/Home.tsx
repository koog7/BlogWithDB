import axiosApi from "../axios/AxiosAPI.tsx";
import {useEffect, useState} from "react";
import {Card, CardContent, Container, Typography} from "@mui/material";
interface Post {
    editorContent: string;
    title: string;
    date: string;
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
                                <Typography gutterBottom component="div" fontSize={'13px'} color={'grey'}>
                                    Created on: {post.date}
                                </Typography>
                                <Typography gutterBottom variant="h4" component="div">
                                    {post.title}
                                </Typography>
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