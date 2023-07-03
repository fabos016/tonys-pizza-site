import React from "react";
import {Accordion, Form} from "react-bootstrap";

import 'bootstrap/dist/css/bootstrap.min.css'

function SearchFilters () {
    return (
        <div className="d-lg-flex me-auto">
            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Type of Topping</Accordion.Header>
                    <Accordion.Body>
                        { /* Types of toppings */ }
                        <Accordion alwaysOpen>

                            { /* Meat toppings */ }
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    Meat & Dairy
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Beef Pepperoni"} label={"Beef Pepperoni"} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Cheese"} label={"Cheese"} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Chicken"} label={"Chicken"} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Pork Pepperoni"} label={"Pork Pepperoni"} />
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion.Item>

                            { /* Vegetable toppings */ }
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    Veggie
                                </Accordion.Header>

                                <Accordion.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Basil"} label={"Basil"} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Green pepper"} label={"Green pepper"} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Onion"} label={"Onion"} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Tomato"} label={"Tomato"} />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Check type="checkbox"  id={"Red pepper"} label={"Red pepper"} />
                                    </Form.Group>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Crust Thickness</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Thin"} label={"Thin"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Medium"} label={"Medium"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Thick"} label={"Thick"} />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Type of Crust</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Detroit style"} label={"Detroit style"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Flatbread"} label={"Flatbread"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Stuffed"} label={"Stuffed"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"New York style"} label={"New York style"} />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <Accordion style={{width: '100%', textAlign: 'left'}} alwaysOpen>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Crust Texture</Accordion.Header>
                    <Accordion.Body>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Chewy"} label={"Chewy"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Crispy"} label={"Crispy"} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Check type="checkbox"  id={"Thick"} label={"Thick"} />
                        </Form.Group>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}

export default SearchFilters;