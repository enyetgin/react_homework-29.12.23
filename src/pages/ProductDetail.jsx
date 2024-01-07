import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Button, Card, Image, Icon, CardContent} from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    let productService = new ProductService();
    productService.getProductByName(name).then((result) => setProduct(result.data.data));
  }, []);
  return (
    <Card.Group>
      {console.log(product)}
      <Card fluid>
        <Image src='https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e3a57bdb3717fbf9cec_Product_Default.svg' size="large" rounded centered />
        <Card.Content>
          <Card.Header>{product.productName}</Card.Header>
          {/* <Card.Meta>{product.category.categoryName}</Card.Meta> */}
          <Card.Description>{product.quantityPerUnit}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
            {product.unitsInStock}
            <Icon name="boxes" />
          </a>
        </Card.Content>
        <CardContent fontSize="large">
            {product.unitPrice}
            <Icon name="dollar" /> 
        </CardContent>
        <Card.Content extra>
          <div className="ui two buttons">
            <Button basic color="green">
              Sepete Ekle
            </Button>
            <Button basic color="red">
              Sepetten Çıkar
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  );
}
