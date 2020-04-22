import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { Observable, from } from 'rxjs';
import { Order } from './order.model';

@Injectable()
export class StaticDataSource {
    private products: Product[] = [
        new Product(1,"product 1","Category 1","Product 1 (Category 1)",100),
        new Product(2,"product 2","Category 1","Product 1 (Category 1)",100),
        new Product(3,"product 3","Category 1","Product 1 (Category 1)",100),
        new Product(4,"product 4","Category 1","Product 1 (Category 1)",100),
        new Product(5,"product 5","Category 1","Product 1 (Category 1)",100),
        new Product(6,"product 6","Category 2","Product 1 (Category 2)",100),
        new Product(7,"product 7","Category 2","Product 1 (Category 2)",100),
        new Product(8,"product 8","Category 2","Product 1 (Category 2)",100),
        new Product(9,"product 9","Category 2","Product 1 (Category 2)",100),
        new Product(10,"product 10","Category 2","Product 1 (Category 2)",100),
        new Product(11,"product 11","Category 3","Product 1 (Category 3)",100),
        new Product(12,"product 12","Category 3","Product 1 (Category 3)",100),
        new Product(13,"product 13","Category 3","Product 1 (Category 3)",100),
        new Product(14,"product 14","Category 3","Product 1 (Category 3)",100),
        new Product(15,"product 15","Category 3","Product 1 (Category 3)",100),
    ];
    getProducts():Observable<Product[]>{
        return from([this.products]);
    }

    saveOrder(order: Order) : Observable<Order> {
        console.log(JSON.stringify(order))
        return from([order]);
    }
}