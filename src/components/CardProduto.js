import React from 'react';
import { Card, CardBody, CardTitle, CardText } from './styled';
import { Input } from 'reactstrap';

const CardProduto = ({ produto, onChangeQuantidade }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{produto.descricao}</CardTitle>
                <CardText>
                    <strong>Valor:</strong> {Number(produto.valordevenda).toLocaleString('pt-BR', { style: 'currency', currency: "BRL" })}
                </CardText>
                <CardText>
                    <Input
                        type="number"
                        placeholder="Quantidade"
                        value={produto.quantidade}
                        onChange={(e) => onChangeQuantidade(e.target.value)}
                    />
                </CardText>
            </CardBody>
        </Card>
    );
}

export default CardProduto;
