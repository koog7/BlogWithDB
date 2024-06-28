import {Button, TextField} from "@mui/material";
import {Editor} from "@tinymce/tinymce-react";
import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axiosApi from "../axios/AxiosAPI.tsx";

interface Post {
    title: string;
    editorContent: string;
    date: string;
}
const FormSendler = () => {
    const [PostData, setPostData] = useState<Post>({
        title: '',
        editorContent: '',
        date: '',
    });
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => {
        if (id) {
            axiosApi.get<Post>(`/posts/${id}.json`)
                .then(response => {
                    setPostData(response.data);
                });
        }else {
            setPostData({
                title: '',
                editorContent: '',
                date: '',
            });
        }
    }, [id]);

    const followChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setPostData((prevState) => ({...prevState, title: value,}));
    };
    const editorFollowChange = (content: string) => {
        setPostData((prevState) => ({...prevState, editorContent: content,}));
    };

    const onFormSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        if(PostData.title.trim() === '' && PostData.editorContent.trim() === ''){return;}
        const d = new Date();
        const currentDate = d.getFullYear() + '-' +
        ('0' + (d.getMonth() + 1)).slice(-2) + '-' +
        ('0' + d.getDate()).slice(-2) + ' ' +
        ('0' + d.getHours()).slice(-2) + ':' +
        ('0' + d.getMinutes()).slice(-2) + ':' +
        ('0' + d.getSeconds()).slice(-2);

        if (!PostData) return;

        const postToSubmit = {
            ...PostData,
            date: currentDate
        };

        try {
            if (id) {
                await axiosApi.put(`/posts/${id}.json`, postToSubmit);
            } else {
                await axiosApi.post('/posts.json', postToSubmit);
            }
        } finally {
            navigate('/');
            setPostData({
                title: '',
                editorContent: '',
                date: '',
            });
        }
    };

    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Enter a title!"
                    variant="outlined"
                    name={'title'}
                    value={PostData.title}
                    onChange={followChange}
                    style={{width: '940px'}}
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            marginBottom: '5px',
                            '& fieldset': {
                                borderColor: 'white',
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
                <Button type={'submit'} variant="contained" style={{marginTop: '10px'}}>{id ? 'Update!' : 'Send!'}</Button>
            </form>
        </div>
    );
};

export default FormSendler;