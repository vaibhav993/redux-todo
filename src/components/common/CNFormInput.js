import React from "react";

export default class CNFormInput extends React.Component <{
    submit: Function
}>{
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            errorMsg: ""
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.resetForm = this.resetForm.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        var textLen = this.state.text.length;
        if (textLen < 2 || textLen > 20) {
            this.setState({
                errorMsg: textLen < 2
                    ? "Must be 2 characters or more"
                    : "Must be 20 characters or less"
            });
        }else {
            this.props.submit(this.state.text)
            this.resetForm();
        }
    }

    resetForm() {
        this.setState({
            text: "",
            erroMsg: ""
        });
    }

    onChange(e) {
        this.setState({
            text: e.target.value
        });
    }

    render() {
        return  (
            <form onSubmit={this.onSubmit}>
                <div>
                    <input
                        name="todoinput"
                        id="todoinput"
                        type="text"
                        value={this.state.text}
                        onChange={this.onChange}
                    />
                </div>
                <div>{this.state.errorMsg}</div>
                <button
                    type="submit"
                >ADD TODO</button>
            </form>
        )
    }
}




