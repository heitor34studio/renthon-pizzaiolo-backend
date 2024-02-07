import { Request, Response } from 'express'
import { ListByCategorieService } from '../../services/product/ListByCategoryService'

class ListByCategorieController{
    async handle(req:Request, res:Response){
        const category_id = req.query.category_id as string;
        const listByCategorie = new ListByCategorieService();
        const products = await listByCategorie.execute({
            category_id
        })
        return res.json(products)
    }
}
export {ListByCategorieController}