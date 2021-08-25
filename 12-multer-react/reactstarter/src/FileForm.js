import React, {Component} from 'react';
import axios from "axios";

class FileForm extends Component{

    handleSubmit = (e)=>{
        e.preventDefault();
        const file = document.getElementById("file-field").files[0];
        const url = "http://localhost:3000/uploadFile";
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            }
        }
        const data = new FormData();
        data.append("meme", file)
        axios.post(url, data, config).then((response) => {
            console.log(response.data)
        })
        console.log(file)
    }

    handleArraySubmit = (e) => {
        e.preventDefault();
        const file = document.getElementById("file-field").files;
        const file2 = document.getElementById("file-field2").files[0];
        const url = "http://localhost:3000/uploadFiles";
        const config = {
            headers: {
                "content-type": "multipart/form-data",
            }
        }
        const data = new FormData();
        data.append("meme", file)
        data.append("meme", file2)
        axios.post(url, data, config).then((response) => {
            console.log(response.data)
        })
        console.log(file)
    }

    render(){
        return(
            <div>
                <h1>Sanity Check</h1>
                <form onSubmit={this.handleSubmit}>
                    <input id="file-field" type="file" name="meme" />
                    <input type="submit" value="submit" />
                </form>
                <hr />
                <form onSubmit={this.handleArraySubmit}>
                    <input id="file-field" type="file" name="meme" />
                    <input id="file-field2" type="file" name="meme" />
                    <input type="submit" value="submit" />
                </form>
            </div>
        )
    }
}

export default FileForm;