import React, { useState } from "react";

import {
  Button,
  FormGroup,
  Input,
  Row,
  Col,
} from "reactstrap";


export default function SearchForm({ getSearch }) {

    const [search, setSearch] = useState('')

    const handleKeyDown = (evt) => {
        if (evt.key === 'Enter') {
           getSearch(search)
        }
    }

    return ( 
            <Row>
                <Col className="pr-1" md="8">
                    <FormGroup>
                        <Input style={{ "margin-top": '2%' }}
                            onChange={e => setSearch(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Nome, CPF ou E-mail:"
                            type="text"
                        />
                    </FormGroup>
                </Col>
                <Col className="pr-1" md="2">
                    <div className="update ml-auto mr-auto" >
                     <FormGroup>
                        <Button
                            onClick={() => getSearch(search)}
                            className="btn-round"
                            color="primary"
                            type="button">
                            Pesquisar
                        </Button>
                      </FormGroup>  
                    </div>
                </Col>
            </Row>
    ); 
}

