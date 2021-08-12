import React, { useState } from 'react'
import './Login.css';
import { Link } from "react-router-dom";
import './kycdoc.css';
import { Form, Radio, Input } from "antd";
import Fileupload from './Fileupload';
import UserNav from './UserNav';
export default function Kycdocument() {
    const [state, setState] = useState(
        {

            showTextBox: false,
            showfileBox: false

        }
    );
    const [formErrors, setformErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [data,setData]=useState([]);
    const [st, setSt] = useState({
        txt: " ",
        proof: " ",
        proofname:" "

    })
    const onChangeValue = (e) => {
        const { name, value } = e.target

        setSt((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
        console.log(st);
    };

    const handleOnChange = e => {
        if (e.target.value === 1) {
            setState({ showTextBox: true })
            //   setState({showfileBox:false})
        }
        else if (e.target.value === 2) {
            // setState({showTextBox:false})
            setState({ showfileBox: true })
        }
        else {
            setState({ showTextBox: false })
            setState({ showfileBox: false })
        }

    };
    const validate = (values) => {

        let err = {};

        console.log(values);


        if (!values.proof) {
            err.proof = "*proof nmae is reqired";
        }
        if (!values.txt) {
            err.txt = "*proof id/number is required"
        }
        if (!values.proofname) {
            err.proofname = "*name of the holder as in the proof  is reqired";
        }
        return err;
    }
    const handleonClick = (e) => {

        e.preventDefault();
        setformErrors(validate(st))

        setSubmitted(true)

        const reqOptios = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(st)
        };

        fetch("http://localhost:8080/api/kycproof", reqOptios).then(res => res.json()).then(data => {
            console.log("saved");
            alert("successfully submitted");
            console.log(data.id);
            setData(data.id);
        })
        alert("summitted successfully");
    }
    return (
        <div>
            <div>
                <UserNav/>
            </div>
            <div className="container">
                <div>
                    <h3 className="t1">Upload Documents</h3>
                    <div className="docline">
                        Document can be in PDF | JPG | JPEG | BMP | XLS | XLSX | DOC | DOCX. Document size should be less than 4MB
                        <div className="doc">
                            <Form.Item>
                                <Radio.Group onChange={handleOnChange}>
                                    <Radio value={1}>KYC</Radio>
                                    <Radio value={2}>Photograph</Radio>
                                </Radio.Group><br />
                                {state.showTextBox && <div>
                                    <div>
                                        <h6>Enter the proof name :(aadhar/pan/gasbill)</h6>
                                        <input type="text" value={st.proof} name="proof" onChange={onChangeValue} /><br />
                                        {formErrors.proof}
                                    </div>
                                    <div>
                                        <h6>Enter the number :</h6>
                                        <input type="text" name="txt" value={st.txt} onChange={onChangeValue} />
                                        {formErrors.txt}
                                    </div>
                                    <div>
                                        <h6>Enter the name as in the proof :</h6>
                                        <input type="text" name="proofname" value={st.proofname} onChange={onChangeValue} />
                                        {formErrors.proofname}
                                    </div>
                                    <div>
                                        <button onClick={handleonClick}>Sumbit</button>
                                    </div>
                                </div>}
                                {state.showfileBox && <Fileupload />}
                            </Form.Item>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}







