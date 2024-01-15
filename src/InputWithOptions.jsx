// SingleInput.jsx

import React, { Component } from 'react';
import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBriefcase, faBuildingColumns, faCheck, faUpload} from '@fortawesome/free-solid-svg-icons';
import Uploading from "./uploadButton/upload";

class SingleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            customValue: '',
            options: [
                { value: '', label: 'Search ""' },
                { value: 'Option 1', label: 'Option 1' },
                { value: 'Option 2', label: 'Option 2' },
                { value: 'Option 3', label: 'Option 3' },
            ],
            clicked : false,
            image:[]

        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleUpload= (event) => {
        const file = event.target.files[0];
        this.state.image.push(file)
        this.setState({image:this.state.image})
        console.log(event, file, "   <------------")
    }
    handleClick() {
        this.setState(prevState => ({
            clicked: !prevState.clicked
        }));
    }
    handleChange = (selected) => {
        this.setState({ selectedOption: selected });
        if (selected && !this.state.options.find((option) => option.value === selected.value)) {
            this.setState({ customValue: selected.value });
        } else {
            this.setState({ customValue: '' });
        }
    };

    onInputChange = (newValue) => {
        const updatedOptions = [
            { value: '', label: `Search "${newValue}"` },
            ...this.state.options.slice(1),
        ];
        this.setState({ options: updatedOptions });
    };

    render() {
        const circleStyle = {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            border: '2px solid #000', // Adjust border properties as needed
        };

        const iconStyle = {
            fontSize: '20px', // Adjust icon size as needed
            color: '#000', // Adjust icon color as needed
            marginBottom: '5px',
        };
        return (
            <div style={{width: '30%', marginLeft: '35%'}}>
                <Select
                    value={this.state.selectedOption}
                    onChange={this.handleChange}
                    options={this.state.options}
                    placeholder="Select or enter a custom value"
                    // isClearable
                    onInputChange={this.onInputChange}
                />
                {this.state.customValue && (
                    <p>You entered: <strong>{this.state.customValue}</strong></p>
                )}
                <div></div>
                <div style={circleStyle}>
                    <FontAwesomeIcon icon={faBuildingColumns} style={iconStyle}/>
                </div>
                <span>Label</span>
                <FontAwesomeIcon icon="fa-solid fa-building-columns"/>
                <i className="fa-solid fa-building-columns"></i>
                <Uploading/>
                <div className="square"></div>
                <div className="dashed-line">
                    <FontAwesomeIcon icon={faUpload} style={{color: 'blue', fontSize: '50px'}}/>
                </div>
                <div className={"circleCheck"}></div>
                <br/><br/>

                <input type="file" onChange={(event) => {
                    this.handleUpload(event)
                }}/>
                <div >
                    {this.state.image.map((image, index) => (
                        <img style={{height: '200px', width: '200px'}} key={index} src={URL.createObjectURL(image)} alt={`Image-${index}`}
                             onClick={() =>{
                                 this.state.image.splice(index, 1);
                                 console.log(this.state.image)
                                 this.setState({image:this.state.image});
                             }}/>
                    ))}
                </div>

                {/*<div style={{marginBottom: '10px'}}>*/}
                {/*    <FontAwesomeIcon icon={faCheck} style={{color: 'white', fontSize: '40px'}}/>*/}
                {/*    <div className="circleStyle"><FontAwesomeIcon icon={faBriefcase}/></div>*/}
                {/*    <span className={"text-format"}*/}
                {/*          style={{marginLeft: '15px', fontSize: 'large'}}>{"Corporate Docs"}</span>*/}
                {/*</div>*/}

            </div>
        );
    }
}

export default SingleInput;
