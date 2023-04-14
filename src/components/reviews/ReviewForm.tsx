import { Button, Form } from "react-bootstrap";

interface ReviewFormProps {
    handleSubmit: () => void,
    revText: any,
    labelText: string,
    defaultValue: string,
}

export const ReviewForm = (props: ReviewFormProps) => {
    return (<>
        <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>{props.labelText}</Form.Label>
                <Form.Control ref={props.revText} as="textarea" rows={3} defaultValue={props.defaultValue}></Form.Control>
            </Form.Group>
            <Button variant="outline-info" onClick={props.handleSubmit}>Submit</Button>
        </Form>
    </>);

}