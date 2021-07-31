import React, { useState } from 'react';
import axios from 'axios';

export default function Fileupload() {
    const [state, setState] = useState({ selectedFile: null })

    const onFileChange = event => {
        setState({ selectedFile: event.target.files[0] });
    };

    const onFileUpload = () => {

        const formData = new FormData();

        formData.append(
            "myFile",
            state.selectedFile,
            state.selectedFile.name
        );

        console.log(state.selectedFile);

        let apiurl="http://localhost:8080/upload";

        axios.post(apiurl,formData)
    };
   const fileData = () => {

        if (state.selectedFile) {

            return (
                <div>
                    <h2>File Details:</h2>

                    <p>File Name: {state.selectedFile.name}</p>


                    <p>File Type: {state.selectedFile.type}</p>


                    <p>
                        Last Modified:{" "}
                        {state.selectedFile.lastModifiedDate.toDateString()}
                    </p>

                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <h4>Choose before Pressing the Upload button</h4>
                </div>
            );
        }
    };

    return (
        <div>
            <h3>
                Photograph Upload
            </h3>
            <div>
                <input type="file" onChange={onFileChange} />
                <button onClick={onFileUpload}>Upload</button>            
            </div>
            {fileData()}
        </div>
    )
}
