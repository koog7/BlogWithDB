import {useEffect, useState} from "react";
import axiosApi from "../axios/AxiosAPI.tsx";
import {useNavigate, useParams} from "react-router-dom";
import {Button, Card, CardContent, Container, Typography} from "@mui/material";

interface Post {
    editorContent: string;
    title: string;
    date: string;
}

const ReadMore = () => {
    const {id} = useParams();
    const [dataDB , setDataDB] = useState<Post>();
    const navigate = useNavigate();
    const [loader , setLoader] = useState(false)

    useEffect(() => {
        setLoader(true)
        axiosApi.get<Post >(`/posts/${id}.json`)
            .then(response => {
                setDataDB(response.data);
            });
        setLoader(false)
    }, [id]);

    const deletePost = async () => {
        try {
            setLoader(true)
            await axiosApi.delete(`/posts/${id}.json`);
            setLoader(false)
        } finally {
            navigate('/');
        }
    };
    const editNavigate = () => {
      navigate(`/posts/${id}/edit`);
    };
    return (
        <Container>
            <div id="loader-container" style={{display: loader ? 'block' : 'none'}}>
                <div className="loader"></div>
            </div>
            {dataDB && (
                <Card sx={{maxWidth: 600, borderRadius: '10px', margin: '20px auto', padding: '10px'}}>
                    <CardContent>
                        <Typography gutterBottom component="div" fontSize={'13px'} color={'grey'}>
                            Created on: {dataDB.date}
                        </Typography>
                        <Typography gutterBottom variant="h4" component="div">
                            {dataDB.title}
                        </Typography>
                        <Typography
                            variant="body1"
                            component="div"
                            dangerouslySetInnerHTML={{__html: dataDB.editorContent}}
                        />
                    </CardContent>
                    <Button variant="contained" sx={{marginRight: '10px'}} onClick={editNavigate}>Edit</Button>
                    <Button variant="outlined" onClick={deletePost}>Delete!</Button>
                </Card>
            )}
        </Container>
    );
};

export default ReadMore;