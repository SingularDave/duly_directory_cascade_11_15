import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import React, {useEffect} from "react";
import {useState} from "react";
import EmployeeCard from "./EmployeeCard";
import DropDownComponent from "./DropDownComponent";
import {Typeahead} from "react-bootstrap-typeahead";
import {Button} from "react-bootstrap";


//Boilerplate Functional Component with export default
function SearchSection(props) {
    const {
        all_providers,
        all_providers_specialty,
        all_providers_locations,
        all_providers_sub_specialty,
        all_providers_body_parts,
        all_providers_procedures,
        all_providers_full_name
    } = props;


    const [QualifiedProviders, setQualifiedProviders] = useState(all_providers);
    const [SearchEngaged, setSearchEngaged] = useState(false);

    const [DropdownSpecialty, setDropdownSpecialty] = useState({
        placeholder: "Select Specialty",
        options: all_providers_specialty,
        defaultValue: '',
        value: '',
        disabled: false
    });
    const [DropdownSubspecialty, setDropdownSubspecialty] = useState({
        placeholder: "Select Subspecialty",
        options: all_providers_sub_specialty,
        defaultValue: '',
        value: '',
        disabled: false
    });
    const [DropdownBodyRegions, setDropdownBodyRegions] = useState({
        placeholder: "Select Body Region",
        options: all_providers_body_parts,
        defaultValue: '',
        value: '',
        disabled: false
    });
    const [DropdownProcedures, setDropdownProcedures] = useState({
        placeholder: "Select Procedure",
        options: all_providers_procedures,
        defaultValue: '',
        value: '',
        disabled: false
    });
    const [DropdownLocation, setDropdownLocation] = useState({
        placeholder: "Select Location",
        options: all_providers_locations,
        defaultValue: '',
        value: '',
        disabled: false
    });

    const [SingleNameSelection, setSingleNameSelection] = useState([]);
    const [QualifiedProviderSpecialties, setQualifiedProviderSpecialties] = useState(all_providers_specialty);
    const [QualifiedProviderSubspecialties, setQualifiedProviderSubspecialties] = useState(all_providers_sub_specialty);
    const [QualifiedProviderBodyRegions, setQualifiedProviderBodyRegions] = useState(all_providers_body_parts);
    const [QualifiedProviderProcedures, setQualifiedProviderProcedures] = useState(all_providers_procedures);
    const [QualifiedProviderLocations, setQualifiedProviderLocations] = useState(all_providers_locations);
    const [ButtonsDisabled, setButtonsDisabled] = useState(false);

    //Create an event handler for dropdown selection. When a dropdown item is selected, the event handler will update
    // the state of that dropdown to the item selected.
    const handleDropdownSelection = (eventKey, event) => {
        if (eventKey === "DropdownSpecialty") {
            setDropdownSpecialty({value: event, placeholder: event, options: event, defaultValue: '', disabled: true});
            setQualifiedProviders(QualifiedProviders.filter((provider) => provider.specialty === event));
        }
        if (eventKey === "DropdownSubspecialty") {
            setDropdownSubspecialty({
                value: event,
                placeholder: event,
                options: event,
                defaultValue: '',
                disabled: true
            });
            setQualifiedProviders(QualifiedProviders.filter((provider) => provider.sub_specialty.includes(event)));
        }
        if (eventKey === "DropdownBodyRegions") {
            setDropdownBodyRegions({
                value: event,
                placeholder: event,
                options: event,
                defaultValue: '',
                disabled: true
            });
            setQualifiedProviders(QualifiedProviders.filter((provider) => provider.body_parts.includes(event)));
        }
        if (eventKey === "DropdownProcedures") {
            setDropdownProcedures({value: event, placeholder: event, options: event, defaultValue: '', disabled: true});
            setQualifiedProviders(QualifiedProviders.filter((provider) => provider.procedures.includes(event)));
        }
        if (eventKey === "DropdownLocation") {
            setDropdownLocation({value: event, placeholder: event, options: event, defaultValue: '', disabled: true});
            setQualifiedProviders(QualifiedProviders.filter((provider) => provider.locations.includes(event)));
        }
    };

    // function to remove duplicates from array and sort it alphabetically, and then return
    function removeDuplicates(data) {
        return [...new Set(data)].sort();
    }

    // useEffect, when DropdownSpecialty changes, setQualifiedProviders(QualifiedProviders.filter((provider) => provider.specialty === event))
    useEffect(() => {
        console.log("useEffect due to DropdownSpecialty changed");
        if (DropdownSpecialty.value !== '') {
            setQualifiedProviderSpecialties(removeDuplicates(QualifiedProviders.map((provider) => provider.specialty)));
            setQualifiedProviderSubspecialties(removeDuplicates(QualifiedProviders.map((provider) => provider.sub_specialty).flat()));
            setQualifiedProviderBodyRegions(removeDuplicates(QualifiedProviders.map((provider) => provider.body_parts).flat()));
            setQualifiedProviderProcedures(removeDuplicates(QualifiedProviders.map((provider) => provider.procedures).flat()));
            setQualifiedProviderLocations(removeDuplicates(QualifiedProviders.map((provider) => provider.locations).flat()));
        }
    }, [DropdownSpecialty.value, DropdownSubspecialty.value, DropdownBodyRegions.value, DropdownProcedures.value, DropdownLocation.value]);


    //click handler for reset button. Resets all dropdowns to default state.
    const handleReset = () => {
        setDropdownSpecialty({
            placeholder: "Select Specialty",
            options: all_providers_specialty,
            defaultValue: '',
            value: '',
            disabled: false
        });
        setDropdownSubspecialty({
            placeholder: "Select Subspecialty",
            options: all_providers_sub_specialty,
            defaultValue: '',
            value: '',
            disabled: false
        });
        setDropdownBodyRegions({
            placeholder: "Select Body Region",
            options: all_providers_body_parts,
            defaultValue: '',
            value: '',
            disabled: false
        });
        setDropdownProcedures({
            placeholder: "Select Procedure",
            options: all_providers_procedures,
            defaultValue: '',
            value: '',
            disabled: false
        });
        setDropdownLocation({
            placeholder: "Select Location",
            options: all_providers_locations,
            defaultValue: '',
            value: '',
            disabled: false
        });
        setQualifiedProviders(all_providers);
        setQualifiedProviderSpecialties(all_providers_specialty);
        setQualifiedProviderSubspecialties(all_providers_sub_specialty);
        setQualifiedProviderBodyRegions(all_providers_body_parts);
        setQualifiedProviderProcedures(all_providers_procedures);
        setQualifiedProviderLocations(all_providers_locations);
        setSingleNameSelection([]);
        setSearchEngaged(false);
        setButtonsDisabled(false);
    };

    //click handler for search button. Sets searchEngaged to true.
    const handleDropdownSearch = () => {
        setButtonsDisabled(true);
        setSearchEngaged(true);
    }


    const handleNameSearch = () => {
        setButtonsDisabled(true);
        setQualifiedProviders(all_providers);
        console.log("Name Search Engaged");
        console.log('SingleNameSelection ' + SingleNameSelection[0]);
        setQualifiedProviders(QualifiedProviders.filter((provider) => provider.full_name === SingleNameSelection[0]));
        console.log('QualifiedProviders ' + QualifiedProviders);
        if (SingleNameSelection.length === 0) {
            setSearchEngaged(false);
        } else {
            setDropdownSpecialty({
                placeholder: "Select Specialty",
                options: all_providers_specialty,
                defaultValue: '',
                value: '',
                disabled: true
            });
            setDropdownSubspecialty({
                placeholder: "Select Subspecialty",
                options: all_providers_sub_specialty,
                defaultValue: '',
                value: '',
                disabled: true
            });
            setDropdownBodyRegions({
                placeholder: "Select Body Region",
                options: all_providers_body_parts,
                defaultValue: '',
                value: '',
                disabled: true
            });
            setDropdownProcedures({
                placeholder: "Select Procedure",
                options: all_providers_procedures,
                defaultValue: '',
                value: '',
                disabled: true
            });
            setDropdownLocation({
                placeholder: "Select Location",
                options: all_providers_locations,
                defaultValue: '',
                value: '',
                disabled: true
            });
            setSearchEngaged(true);
        }
    }

    return (
        <div>
            <Row>
                <Col/>
                <Col>
                    <Card>
                        <Card.Body>
                            <Card.Title className={"text-center"}>Search Providers</Card.Title>
                            <Typeahead id="Name Typeahead" labelKey="name" options={all_providers_full_name}
                                       onChange={setSingleNameSelection} placeholder="Search a Name..."
                                       selected={SingleNameSelection}/>
                            <Row>
                                <Col/>
                                <Col>
                                    <Button className={"btn btn-primary mt-3 text-nowrap"} disabled={ButtonsDisabled}
                                            onClick={handleNameSearch}>Name Search
                                    </Button>
                                </Col>
                                <Col/>
                            </Row>
                            <DropDownComponent
                                placeholder={DropdownSpecialty.placeholder}
                                eventKey="DropdownSpecialty"
                                options={QualifiedProviderSpecialties}
                                onChange={(value) => handleDropdownSelection('DropdownSpecialty', value)}
                                dropdown_button_disabled={DropdownSpecialty.disabled}
                            />
                            <DropDownComponent
                                placeholder={DropdownSubspecialty.placeholder}
                                eventKey="DropdownSubspecialty"
                                options={QualifiedProviderSubspecialties}
                                onChange={(value) => handleDropdownSelection('DropdownSubspecialty', value)}
                                dropdown_button_disabled={DropdownSubspecialty.disabled}
                            />
                            <DropDownComponent
                                placeholder={DropdownProcedures.placeholder}
                                eventKey="DropdownProcedures"
                                options={QualifiedProviderProcedures}
                                onChange={(value) => handleDropdownSelection('DropdownProcedures', value)}
                                dropdown_button_disabled={DropdownProcedures.disabled}
                            />
                            <DropDownComponent
                                placeholder={DropdownBodyRegions.placeholder}
                                eventKey="DropdownBodyRegions"
                                options={QualifiedProviderBodyRegions}
                                onChange={(value) => handleDropdownSelection('DropdownBodyRegions', value)}
                                dropdown_button_disabled={DropdownBodyRegions.disabled}
                            />
                            <DropDownComponent
                                placeholder={DropdownLocation.placeholder}
                                eventKey="DropdownLocation"
                                options={QualifiedProviderLocations}
                                onChange={(value) => handleDropdownSelection('DropdownLocation', value)}
                                dropdown_button_disabled={DropdownLocation.disabled}
                            />
                            <div className={"text-center"}>
                                <Row>
                                    <Col/>
                                    <Col>
                                        <Button className={"btn btn-primary mt-3"} disabled={ButtonsDisabled}
                                                onClick={handleDropdownSearch}>Search
                                        </Button>
                                    </Col>
                                    <Col/>
                                </Row>
                            </div>
                            <div className={"text-center"}>
                                <Row>
                                    <Col/>
                                    <Col>
                                        <Button className={"btn btn-sm btn-secondary mt-2"}
                                                onClick={handleReset}>Clear
                                        </Button>
                                    </Col>
                                    <Col/>
                                </Row>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col/>
            </Row>
            {QualifiedProviders.map((employee) => {
                    return (
                        <EmployeeCard
                            key={employee.full_name}
                            name={employee.full_name}
                            specialty={employee.specialty}
                            image={employee.image}
                            website_url={employee.website_url}
                            location={employee.locations}
                            phone={employee.cell_phone_number}
                            email={employee.email}
                            cell_phone_number={employee.cell_phone_number}
                            search_engaged={SearchEngaged}
                        />
                    )
                }
            )}
        </div>
    );
}

export default SearchSection;

