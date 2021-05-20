import React from 'react';
import Card from './components/Cards/card';

  

const Products = ({stock, initial}) => {
const [stockRequired, setStockRequired] = useState(initial);
    const onAdd = () => {
        if (stock >= stockRequired +1) {
            setStockRequired(stockRequired + 1);
        }
    };
    return <div onClick={onAdd}>{stockRequired}</div>;
}

export default function App() {
    return (
        <CardContainer>
            <Card
            title="Product"
            imagen="data: utils/img/course.jpg"
            > Info del curso
            </Card>
        </CardContainer>
    )
 

};