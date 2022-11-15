import Dropdown from "react-bootstrap/Dropdown";
import {DropdownButton} from "react-bootstrap";
import Link from "next/link";
import React from "react";

function DropDownComponent(props) {
    return (
        <div key={props.eventKey}>
            <Dropdown className={"m-4"}>
                <DropdownButton title={props.placeholder} disabled={props.dropdown_button_disabled} >
                    <Dropdown.Menu>
                        {props.options.map((item) => {
                            return (
                                <Dropdown.Item onClick={() => props.onChange(item)} key={item}>{item}</Dropdown.Item>
                            )
                        })}
                    </Dropdown.Menu>
                </DropdownButton>
            </Dropdown>
        </div>
    )
}

export default DropDownComponent;