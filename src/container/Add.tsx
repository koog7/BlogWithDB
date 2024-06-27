import React, {useEffect, useState} from "react";
import { Editor } from '@tinymce/tinymce-react';
import {Button, TextField} from "@mui/material";
import {useNavigate} from "react-router-dom";
import axiosApi from "../axios/AxiosAPI.tsx";

interface Data {
    title: string;
    editorContent: string;
    date: string;
}

const Add = () => {

    const [PostData, setPostData] = useState<Data>({
        title: '',
        editorContent: '',
        date: '',
    });
    const navigate = useNavigate();

    useEffect(() => {
        console.log(PostData)
    }, [PostData]);

    const followChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPostData((prevState) => ({...prevState, title: value,}));
    };
    const editorFollowChange = (content: string) => {
        setPostData((prevState) => ({...prevState, editorContent: content,}));
    };

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const currentDate = new Date().toLocaleDateString();

        const postToSubmit = {
            ...PostData,
            date: currentDate
        };
        console.log(PostData)
        console.log(currentDate)

        try {

            await axiosApi.post('/posts.json', postToSubmit);
        } finally {
            navigate('/');
            setPostData({
                title: '',
                editorContent: '',
                date: '',
            })
        }
    };

    return (
        <div>
            <h2>Add new post</h2>
            <h3>Title</h3>
            <form onSubmit={onFormSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Enter a title!"
                    variant="outlined"
                    name={'title'}
                    value={PostData.title}
                    onChange={followChange}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            marginBottom: '5px',
                            '& fieldset': {
                                borderColor: 'white',
                                width: '922px',
                            },
                            '&:hover fieldset': {
                                borderColor: 'white',
                            },
                            '&.Mui-focused fieldset': {
                                borderColor: 'white',
                            },
                        },
                        '& .MuiInputLabel-outlined': {
                            color: 'white',
                        },
                        '& .MuiInputBase-input': {
                            color: 'white',
                        },
                    }}
                />
                <h3>Description</h3>
                <Editor
                    apiKey="n2ytyxjlf985xw9tvzqe223rod497qp5yqnvpdomo46d76g0"
                    value={PostData.editorContent}
                    onEditorChange={editorFollowChange}
                    init={{
                        height: 300,
                        menubar: false,
                        toolbar:
                            'undo redo copy | formatselect | \
                            fontsize bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | \
                            removeformat | help'
                    }}
                />
                <Button type={'submit'} variant="contained" style={{marginTop: '10px'}}>Send!</Button>
            </form>


            {/*<div>*/}
            {/*    <h3>Content</h3>*/}
            {/*    <p>{PostData.title}</p>*/}
            {/*    {PostData.editorContent}*/}
            {/*</div>*/}
        </div>
    );
};

export default Add;